class Youtube_Vevo{
constructor(protected subscribe : string){
    this.subscribe=subscribe;
}

getdata=()=>{
    return this.subscribe;
}

}
let Vevo=new Youtube_Vevo('16,437,248');
console.log("Numbers of VEVO Subscribers =" + Vevo.getdata());
/*Extending The Class*/
class Chainsmokers_Vevo extends Youtube_Vevo{
    VideoName:string
    likes:string;
    views:string;
    published:string;
    constructor(subscribe :string,VideoName:string,likes:string,views:string,published:string,){
        super(subscribe);
        this.VideoName=VideoName;
        this.likes=likes;
        this.views=views;
        this.published=published;
    }
    getSub=()=>
    {
        return this.subscribe;
    }

}
    let First = new Chainsmokers_Vevo("14,344,400","EveryBody Hates Me","3.5M","40M","March 2018");
    let Second = new Chainsmokers_Vevo("14,344,400","Don,t Let Me Down","20M","700M","April 2016");
    console.log("Chainsmokers Subscribers = "+ First.getSub());
    console.log("Song Name = " + First.VideoName);
   console.log("Likes= "+ First.likes);
   console.log("Views=" + First.views);
   console.log("Published On =" + First.published);

   console.log("Song Name = " + Second.VideoName);
   console.log("Likes= "+ Second.likes);
   console.log("Views=" + Second.views);
   console.log("Published On =" + Second.published);

/*ExtendiNG tHE cLASS:*/
    class ImagineDragons_Vevo extends Youtube_Vevo{
        public artist:any="Imagine Dragons";
        VideoName:string;
        likes:string;
        views:string;
        published:string;
        constructor(subscribe:string,VideoName:string,likes:string,views:string,published:string,){
            super(subscribe);
            this.VideoName=VideoName;
            this.likes=likes;
            this.views=views;
            this.published=published;
        }

        getvalue=()=>{
            return this.subscribe;
        }
    
    }
    let one_obj = new ImagineDragons_Vevo("920,322","Thunder","4.1M","600M","March 2017")
    let two_obj = new ImagineDragons_Vevo("920,322","Radioactive","10M","1.3B","Dec 2012")
    console.log("Imagine Dragon Subscribers : "+ one_obj.getvalue());
   console.log("Song Name= " +one_obj.VideoName);
   console.log("Likes=" + one_obj.likes);
   console.log("Views=" + one_obj.views);
   console.log("Published On=" + one_obj.published);

   console.log("Song Name = " + two_obj.VideoName);
   console.log("Likes= "+ two_obj.likes);
   console.log("Views=" + two_obj.views);
   console.log("Published On =" + two_obj.published);

   


