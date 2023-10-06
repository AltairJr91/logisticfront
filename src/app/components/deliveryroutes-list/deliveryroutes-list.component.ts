import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-deliveryroutes-list',
  templateUrl: './deliveryroutes-list.component.html',
  styleUrls: ['./deliveryroutes-list.component.css']
})
export class DeliveryroutesListComponent implements OnInit {

  clients: any[]; // Certifique-se de que o tipo de dados corresponde ao que você está recebendo do serviço

  constructor(private clientService: ClientService) {}

  ngOnInit(): void {
    this.clientService.getClientes().subscribe((data: any[]) => {
      this.clients = data;
    });
  }
}
