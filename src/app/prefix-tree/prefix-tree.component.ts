import { Component, OnInit } from '@angular/core';
import {PrefixTreeService} from './prefix-tree.service';

@Component({
  selector: 'app-prefix-tree',
  templateUrl: './prefix-tree.component.html',
  styleUrls: ['./prefix-tree.component.css']
})
export class PrefixTreeComponent implements OnInit {

  constructor(private prefixTreeService: PrefixTreeService) { }

  ngOnInit(): void {
  }

}
