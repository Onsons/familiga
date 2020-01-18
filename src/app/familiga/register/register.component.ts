import { User } from 'src/app/user.interface';
import { UserService } from './../../services/user.service';
import { AuthService } from './../../services/auth.service';
import { Component, OnInit , ElementRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireStorage } from '@angular/fire/storage';
import { finalize } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  constructor(private as: AuthService, private us: UserService, private router: Router,
    private storage: AngularFireStorage, private toast: ToastrService) { }
  errorMessage = '';
  uploadPercent: Observable<number>;
  urlImage: Observable<string>;
  @ViewChild('imageUser') inputImageUser: ElementRef;
  ngOnInit() {
  }

  register(f) {
    const formData: User = f.value;
    console.log('family id :', formData.idFamily);
    this.as.register(formData.email , formData.password)
    .then(data =>
      // Add user to DataBase (Document User)
      this.us.addNewUser(data.user.uid, formData.username, formData.idFamily).then(() => {
        data.user.updateProfile({
          displayName: formData.username,
          photoURL: this.inputImageUser.nativeElement.value,
        });
        this.as.sendMail();
        this.toast.warning(' Vous etes membre', 'Confirmez votre mail');
        // this.router.navigate(['/dashboroad/acceuil']);
      })
      )
    .catch (err => console.log(err));
  }
  onUpload(e) {
    // console.log(e.target.files[0]);
    const id = Math.random().toString(36).substring(2);
    const file = e.target.files[0];
    const filePath = `uploads/profile_${id}`;
    const ref = this.storage.ref(filePath);
    const task = this.storage.upload(filePath, file);
    this.uploadPercent = task.percentageChanges();
    task.snapshotChanges().pipe(finalize(() => this.urlImage = ref.getDownloadURL()))
    .subscribe();
  }
}
