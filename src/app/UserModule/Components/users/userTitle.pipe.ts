import { Pipe, PipeTransform } from "@angular/core";
@Pipe({
    name:'minorPipe'
})
export class UserTitlePipe implements PipeTransform{

    transform(value:string,age:string):string{
    
        if(Number(age)<18)
        {
            
            return "(M)"+value;
        }
        else{
           
          return value;
        }
    }
}