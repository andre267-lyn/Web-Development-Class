import { dba } from "./model/DBA";
import { djpb } from "./model/djpb";
import { karyawanKontrak } from "./model/karyawanKontrak";
import { karyawanTetap } from "./model/karyawanTetap";
import { oracleAdministrator } from "./model/oracleAdministrator";
import { pusintek } from "./model/pusintek";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
[x: string]: any;
karyawanKontrak: any;
oracleA: any;
  constructor() {
    this.karyawanTetap.id = "252525";
    this.karyawanTetap.nama = "Andre";
    this.karyawanTetap.umur = 22;
    this.karyawanTetap.alamat = "Jakarta";
    this.karyawanTetap.gaji = 10000;

    this.karyawanKontrak.id = "899211";
    this.karyawanKontrak.nama = "Nathanael";
    this.karyawanKontrak.umur = 21;
    this.karyawanKontrak.alamat = "Jakarta";
    this.karyawanKontrak.gaji = 7000;

    this.dba.idDivisi = "dba123";
    this.dba.namaDivisi = "DBA";
    this.dba.database = true;

    this.oracleAdministrator.idDivisi = "oracle123";
    this.oracleAdministrator.namaDivisi = "Oracle Administrator";
    this.oracleAdministrator.monitoring = true;

    this.pusintek.nama = "Pusintek";
    this.pusintek.luas = 6000;
    this.pusintek.warna = "Hijau";
    this.pusintek.pusatTeknologi = true;

    this.djpb.nama = "Djpb";
    this.djpb.luas = 3000;
    this.djpb.warna = "Blue";
    this.djpb.perpajakan = true;
  }

  karyawanTetap: karyawanTetap = new karyawanTetap();
  karyawanKontrak: karyawanKontrak = new karyawanKontrak();

  dba: dba = new dba();
  oracleAdministrator: oracleAdministrator = new oracleAdministrator();

  pusintek: pusintek = new pusintek();
  djpb: djpb = new djpb();

}
