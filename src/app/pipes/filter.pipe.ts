import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
	name: 'filter',
	standalone: true
})
export class FilterPipe implements PipeTransform {

	transform(value: any, args?: any): any {
		if (args != undefined && args != null && args != '') {
			return value.filter((data: any) => {
				// Check if name property exists and contains the search term
				if (data.name && (data.name.toLowerCase()).indexOf(args.toLowerCase()) > -1) {
					return true;
				}
				// Check if first_name property exists and contains the search term
				if (data.first_name && (data.first_name.toLowerCase()).indexOf(args.toLowerCase()) > -1) {
					return true;
				}
				// Check if last_name property exists and contains the search term
				if (data.last_name && (data.last_name.toLowerCase()).indexOf(args.toLowerCase()) > -1) {
					return true;
				}
				// Check if email property exists and contains the search term
				if (data.email && (data.email.toLowerCase()).indexOf(args.toLowerCase()) > -1) {
					return true;
				}
				return false;
			});
		}
		return value;
	}

}
