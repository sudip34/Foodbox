import { FormControl, ValidationErrors } from "@angular/forms";

export class MyFromValidator {

    static notOnlyWhitespace(control:FormControl):ValidationErrors{
        // check if string only contains whitespace
        if((control.value!=null) && (control.value.trim().length===0)){
            
            //invalid, retrun error Object
            return{'notOnlyWhitespace':true};
        }else{
            //valid, return null
            return null;
        }
        
    }
}
