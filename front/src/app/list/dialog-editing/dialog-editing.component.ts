import { Component, OnInit, Inject, OnDestroy } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Subscription } from 'rxjs';
import { Task } from 'src/app/shared/model/task';

export interface DialogData {
	task: Task;
}

@Component({
	selector: 'app-dialog-editing',
	templateUrl: './dialog-editing.component.html',
	styleUrls: ['./dialog-editing.component.scss']
})
export class DialogEditingComponent implements OnInit, OnDestroy {
	subscriptionList: Subscription[] = [];

	constructor(
		public dialogRef: MatDialogRef<DialogEditingComponent>,
		@Inject(MAT_DIALOG_DATA) public data: DialogData
	) {
	}

	ngOnInit(): void {
	}

	ngOnDestroy(): void {
		this.subscriptionList.forEach(subs => subs.unsubscribe());
	}

	public cancel(): void {
		this.dialogRef.close();
	}

}
