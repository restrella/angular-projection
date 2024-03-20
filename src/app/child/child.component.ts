import {
  AfterViewInit,
  Component,
  ContentChild,
  ContentChildren,
  Input,
  QueryList,
  TemplateRef,
} from '@angular/core';
import { ChildContentComponent } from '../child-content/child-content.component';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss'],
})
export class ChildComponent implements AfterViewInit {
  @Input() child: TemplateRef<any> | null = null;

  @ContentChild(ChildContentComponent) contentChild:
    | ChildContentComponent
    | undefined;

  @ContentChildren(ChildContentComponent) contentChildren:
    | QueryList<ChildContentComponent>
    | undefined;

  @ContentChildren('myFirstComp') myFirstContent:
    | QueryList<ChildContentComponent>
    | undefined;

  ngAfterViewInit(): void {
    console.log('contentChild', this.contentChild);
    console.log('contentChildren', this.contentChildren?.toArray());
    console.log('myFirstContent', this.myFirstContent?.toArray());
  }
}
