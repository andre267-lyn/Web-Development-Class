import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProfileModel } from 'src/app/model/profilemodel';
import { ProfileService } from 'src/app/services/profile.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {

  constructor(
    private pService: ProfileService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.route.params.subscribe((x: any) => {
      this.nikKaryawan = x.id;
    });

    this.route.url.subscribe((segments) => {
      this.isUpdateRoute = segments.some((segment) => segment.path === 'update');
    });

    this.route.url.subscribe((segments) => {
      this.isAddRoute = segments.some((segment) => segment.path === 'add');
    });
  }

  isAddRoute: boolean = false;
  isUpdateRoute: boolean = false;

  karyawan: ProfileModel[] = [];
  nikKaryawan: any;
  karwayanTerpilih: ProfileModel = new ProfileModel();

  ngOnInit(): void {
    this.pService.getProfileList().subscribe((x: any) => {
      console.log(x);
      this.karyawan = x.data;

      localStorage.setItem('data-karyawan', JSON.stringify(this.karyawan));

    });

    if (this.nikKaryawan) {
      this.pService.getProfileByNik(Number(this.nikKaryawan)).subscribe(x => {
        console.log(x);
      })
    }
  }

  navigateToUpdateProfile() {
    this.router.navigate(['/profile/update']);
  }

  navigateToAddProfile() {
    this.router.navigate(['/profile/add']);
  }

  onSelesai(data: boolean){
    if(data){
      this.isAddRoute = false;
      this.isUpdateRoute = false;
    }
  }
}
