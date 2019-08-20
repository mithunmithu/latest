import { Component,OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import {StoreallinputService} from 'src/app/storeallinput.service';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit 
{
  model: any = {};
  testData = <any>{};
  marked = false;
  checkbox1  :string='';
  checkbox2  :string='';
  checkbox3 :string='';
  checkbox4  :string='';
  checkbox5  :string='';
  checkbox6  :string='';
  checkbox7 :string='';
  checkedname :string='';
  checkedtotalcount:number=0;
  selectedsolutions:string='';

  isonload=false;
  isvalidatereaction=false;
  ishappy = true;
  isokay = true;
  issad= true;
  empid:string;
  feedbacktext:string;
  ideatext:string;
  reaction:string='';
  constructor(private Storeallinput:StoreallinputService,public alertController: AlertController, private router: Router) {

    this.testData  = [{
      checkbox: false, name: 'FS Analytics Dashboards' ,id:1
    },
    {
      checkbox: false, name: 'Insurance Analytics Dashboard' ,id:2
    },
    {
      checkbox: false, name: 'Technology + KREATE Solutions(Risk Profiling,Claims voice boats,Pets Claim advisor) ' ,id:3
    },
    {
      checkbox: false, name: 'Digital Point of Views(Customer Onboarding,Claims Monitoring Solutions,Soluxr) ' ,id:4
    },
    {
      checkbox: false, name: ' AML Solution ' ,id:5
    }, 
    {
      checkbox: false, name: ' IL -FS Product Showcase(Collect Edge Solutions,Smart Search platform) ' ,id:6
    }, 
    {
      checkbox: false, name: ' Industry View - Cutting Edge Innovations in Banking and Insurance space ' ,id:7
    },  
  ]
  }
  paraishappy=false;
  paraissad=false;
  paraisokay=false;

  private jsonobjreact;
  private testresult;
  private jsonobjsolutions;

  ngOnInit() {}
  onclickhappy()
  {
    this.isokay= false;
    this.issad= false;
    this.reaction="happy";
    this.paraishappy=true;
    this.paraissad=false;
    this.paraisokay=false;

  }
  onclicksad()
  {
    this.isokay= false;
    this.ishappy= false;
    this.reaction="sad";
    this.paraishappy=false;
    this.paraissad=true;
    this.paraisokay=false;
  }
  onclickokay()
  {
    this.issad= false;
    this.ishappy= false;
    this.reaction="okay";
    this.paraishappy=false;
    this.paraissad=false;
    this.paraisokay=true;
  }

  onSubmit(form: NgForm)
   {
    //  this.isonload=true;
    //  if(this.reaction==='')
    //  {
    //   this.isvalidatereaction=true;
    //  }
     
    // else if(this.feedbacktext==='')
    // {

    // } 


    // this.feedbacktext = form.value.feebacktext;
    // this.ideatext = this.model
    // this.empid= form.name.employeeid;
    
   
    if (!form.valid) {
      return;
    } 
    if(!this.paraishappy && !this.paraisokay && !this.paraissad)
    {
      return;
    }
    if(this.checkedtotalcount===0){
      return;
    }
    this.jsonobjreact={reaction:this.reaction}
    this.jsonobjsolutions={solutions:  this.selectedsolutions}
    this.testresult=JSON.stringify(this.model) +JSON.stringify(this.jsonobjreact)+JSON.stringify(this.jsonobjsolutions)

    

    this.Storeallinput.setalldata(this.testresult)
    this.presentAlert();
    // form.reset();
    this.issad= true;
    this.ishappy= true;
    this.isokay=true;
    this.paraishappy=false;
    this.paraissad=false;
    this.paraisokay=false;
     this.router.navigateByUrl('/home');
    //window.location.reload();
    this.testData.text = false;
    this.model.text=false ;
    
  }

  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Thank you for your time',
      message: 'Your feedback and suggestions has been submitted successfully',
      buttons: ['OK']
    });

    await alert.present();
  }

  refreshmood()
  {
    this.issad= true;
    this.ishappy= true;
    this.isokay=true;
    this.paraishappy=false;
    this.paraissad=false;
    this.paraisokay=false;
  }

 
  toggleVisibility(e,objid,objname)
  {
 
      this.marked= e.target.checked;
   


    if( this.marked===true)
    {
      this.checkedtotalcount=this.checkedtotalcount+1;
      // console.log('status'+ this.checkbox1+objid)
      if(this.checkbox1==='' && objid===1)
      {
        this.checkbox1=this.checkbox1+objname;
      }
      else  if(this.checkbox2==='' && objid===2)
      {
        this.checkbox2=this.checkbox2+objname;
      }
      else  if(this.checkbox3==='' && objid===3)
      {
        this.checkbox3=this.checkbox3+objname;
      }
      else  if(this.checkbox4==='' && objid===4)
      {
        this.checkbox4=this.checkbox4+objname;
      }
      else  if(this.checkbox5==='' && objid===5)
      {
        this.checkbox5=this.checkbox5+objname;
      }
      else  if(this.checkbox6==='' && objid===6)
      {
        this.checkbox6=this.checkbox2+objname;
      }
      else  if(this.checkbox7==='' && objid===7)
      {
        this.checkbox7=this.checkbox7+objname;
      }
      
    }
    else
    {
      console.log(this.checkedtotalcount);
      // alert(this.checkedtotalcount);
      this.checkedtotalcount=this.checkedtotalcount-1;
      // console.log('status'+ this.checkbox1+objid)
      if(this.checkbox1!=='' && objid===1)
      {
        this.checkbox1='';
      }
      else  if(this.checkbox2!=='' && objid===2)
      {
        this.checkbox2='';
      }
      else  if(this.checkbox3!=='' && objid===3)
      {
        this.checkbox3='';
      }
      else  if(this.checkbox4!=='' && objid===4)
      {
        this.checkbox4='';
      }
      else  if(this.checkbox5!=='' && objid===5)
      {
        this.checkbox5='';
      }
      else  if(this.checkbox6!=='' && objid===6)
      {
        this.checkbox6='';
      }
      else  if(this.checkbox7!=='' && objid===7)
      {
        this.checkbox7='';
      }
      
    

    }
   
    this.selectedsolutions=this.checkbox1+this.checkbox2+this.checkbox3+this.checkbox4+this.checkbox5+this.checkbox6+this.checkbox7;
    console.log(e.target.checked+'-----------------'+this.checkedtotalcount)
    
    // console.log(this.checkbox1+this.checkbox2+this.checkbox3+this.checkbox4+this.checkbox5+this.checkbox6+this.checkbox7+'tot count'+this.checkedtotalcount)
  }



 

}
