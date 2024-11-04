import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CardModule } from 'primeng/card';
import { TabViewModule } from 'primeng/tabview';
import { CardComponent } from './_components/card/card.component';
import { AcceptedCardComponent } from './_components/accepted-card/accepted-card.component';
import { HttpClient } from '@angular/common/http';
import { LeadService } from './_services/lead.service';
import { ButtonModule } from 'primeng/button';
import { Lead } from './_models/lead';
import { CommonModule } from '@angular/common';
import { LeadPipePipe } from './_pipes/lead-pipe.pipe';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    CardModule,
    TabViewModule,
    CardComponent,
    AcceptedCardComponent,
    ButtonModule,
    CommonModule,
    LeadPipePipe,
  ],
  providers: [HttpClient],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'Lead';
  leads: Lead[];
  declined: any;

  constructor(private leadService: LeadService) {}

  receivedData: number;
  declinedData: number;

  receiveData(data: number) {
    this.receivedData = data;
    let index = this.leads.findIndex((item) => item.id === data);
    let leadRemoved = this.leads.splice(index, 1);
    leadRemoved[0].accepted = true;
    this.leads.push(leadRemoved[0]);
  }

  declineData(data: number) {
    this.declinedData = data;
    let index = this.leads.findIndex((item) => item.id === data);
    let leadRemoved = this.leads.splice(index, 1);
  }

  ngOnInit(): void {
    this.getLeads();
  }

  getLeads() {
    if (this.leads === undefined) {
      this.leadService.getLead().subscribe((response) => {
        this.leads = response;
        this.leads.forEach((x) => (x.accepted = false));
        this.saveListToLocalStorage();
        return this.leads;
      });

      let leadsLocalStorage = this.loadListFromLocalStorage();
      return leadsLocalStorage;
    }
  }

  loadListFromLocalStorage() {
    const storedList = localStorage.getItem('leadList');
    if (storedList) {
      this.leads = JSON.parse(storedList);
    }
  }

  addItem(newItem: Lead) {
    this.leads.push(newItem);
    this.saveListToLocalStorage();
  }

  saveListToLocalStorage() {
    localStorage.setItem('leadList', JSON.stringify(this.leads));
  }
}
