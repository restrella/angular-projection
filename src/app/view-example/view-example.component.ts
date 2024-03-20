import {
  AfterViewInit,
  Component,
  OnInit,
  QueryList,
  TemplateRef,
  ViewChild,
  ViewChildren,
} from '@angular/core';
import { ChildComponent } from '../child/child.component';

@Component({
  selector: 'app-view-example',
  templateUrl: './view-example.component.html',
  styleUrls: ['./view-example.component.scss'],
})
export class ViewExampleComponent implements OnInit, AfterViewInit {
  @ViewChild('htmlElement') htmlElement: TemplateRef<any> | undefined;
  // @ViewChild('childComp') childComp1: ChildComponent | undefined;
  @ViewChildren('childComp') childComp: QueryList<ChildComponent> | undefined;
  ngOnInit(): void {}

  ngAfterViewInit(): void {
    // console.log(this.htmlElement);
    console.log(this.childComp?.toArray());
  }
}
