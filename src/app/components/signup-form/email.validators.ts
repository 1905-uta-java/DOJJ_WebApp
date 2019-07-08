import { AbstractControl, ValidationErrors } from '@angular/forms';

export class EmailValidators {
    static cannotContainSpace(control: AbstractControl): ValidationErrors | null {
        if ((control.value as string).indexOf(' ') >= 0) {
            return { cannotContainSpace: true };
        }
        return null;
    }

    static shouldBeUnique(control: AbstractControl): Promise<ValidationErrors | null> {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if(control.value === 'omar@gmail.com', 'david@gmail.com', 'cool@gmail.com'){
                    console.log('ok');
                    resolve({ shouldBeUnique: true });
                } else {
                    resolve(null);
                }
            }, 2000);
        });
    }
}
