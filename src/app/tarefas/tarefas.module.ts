import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { TarefaService  } from './shared';
import { ListarTarefaComponent } from './listar';
import { CadastrarTarefaComponent } from './cadastrar/cadastrar-tarefa.component';
import { EditarTarefaComponent } from './editar';
import { TarefaConcluidaDirective } from './shared/tarefa-concluida.directive';


@NgModule({
  declarations: [
    ListarTarefaComponent,
    CadastrarTarefaComponent,
    EditarTarefaComponent,
    TarefaConcluidaDirective
  ],
  providers: [
    TarefaService
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule
  ]
})
export class TarefasModule { }
