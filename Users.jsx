import React,{Component} from "react";

export default class Home extends Component {

    state ={

        

        list : [
            {
                name : 'Melva',
                surname : 'Makweya',
                age : 16,
                Location : 'Mokopane'
  
            },
            {
               name : 'Nkama',
               surname : 'Langa',
               age : 22,
               Location : 'Mapela'

            },
            {
               name : 'Katlego',
               surname : 'Ledwaba',
               age : 24,
               Location : 'Mahwelereng'

            },
            {
                name : 'Beauty',
              surname : 'Mokoena',
              age : 31,
              Location : 'Witbank'

            },
            {
                name : 'Lehlogonolo',
              surname : 'Sethoga',
              age : 30,
              Location : 'Mosoge'

            },
            {
                name : 'Marcus',
                surname : 'Ramabele',
                age : 36,
                Location : 'Sekgakgapeng',
            }





        ]
    }
    

    render() {
        return (
            <div className =  "cover">
                <h1>list of users</h1>
                <ul>
                {this.state.list.map( element => <li> { element.name +"  "+ element.surname + "  " + element.Location  + " " + element.age} </li>)}
                
                </ul>
                <nav className ="bottom">
                    <h3>Web development made easier,visit our website for more projects-Happy coding!!!</h3>
                    </nav>

        
       
                
            </div>
            
        )
    }

}