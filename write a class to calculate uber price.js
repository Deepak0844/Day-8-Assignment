class Customer {
    constructor(Name,MobileNumber,Email,Pickuplocation,Droplocation){
       this.Name = Name;
       this.MobileNumber = MobileNumber;
       this.Email = Email;
       this.Pickuplocation = Pickuplocation;
       this.Droplocation = Droplocation;
       this.CostperKM = 15;
       this.Baseprice = 49;
    }
        Payment(kmtravelled) {
            
           if(kmtravelled <= 5){
            return ("Total cost = ₹49.00");
            
          } else{
                
            this.Total = this.Baseprice + (this.CostperKM * (kmtravelled - 5));
            return "total cost = ₹" + this.Total;
           }
        } }
const Deepak = new Customer("Deepak",1234567899,"d@gmail.com","velachery","adyar");
console.log(Deepak);
console.log(Deepak.Payment(10));