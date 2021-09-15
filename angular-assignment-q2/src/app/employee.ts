export class Employee {

    constructor(
        public name: string,
        public address: Address,
        public phone: number | undefined,
        public dob: Date | undefined,
        public email: string
        ){}

    setValue(){
        this.name='',
        this.address.setValue(),
        this.phone=undefined,
        this.dob=undefined,
        this.email=''

    }
}

export class Address{

    constructor(
        public street: string,
        public city: string,
        public pincode?: number | undefined
    ){}
    
    setValue(){
        this.street='',
        this.city='',
        this.pincode=undefined
    }
}