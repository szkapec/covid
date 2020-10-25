import React from 'react';
import { Bar, Line, Pie } from 'react-chartjs-2';

class Chart extends React.Component {

    static defaultProps = {
        displayTitle: true,
        displeyLegend: true,
        legendPosition: 'right',
        titleText: 'Wykres ilości zachorowań',
    }

    render() {


            const {newDeaths,active,activeNew,recovered,total,day,totalDeaths,tests,
                Chart0,Chart1,Chart2,Chart3,Chart4,Chart5,Chart6,toDay} = this.props.item;
        return (
            <>
            <div className="chart">
           


            {this.props.bar&&<Bar
            data={{
                labels: [Chart0?'1day':'Nowe zgony', Chart0?'10day':'Nowe przypadki', Chart0?'20day':'Aktywni', Chart3?'30day':'Wszyscy', 
                Chart0?'40day':'wszystkie zgony', Chart0?'50day':'Wyzdrowiałych' , Chart0&&'60day', Chart0&&'toDay'] ,
                datasets: [
                    {
                        label: 'Zainfekowanych osób wirusem Covid-19',
                        data: [
                            Chart0?Chart0:newDeaths,
                            Chart1?Chart1:activeNew,
                            Chart2?Chart2:active,
                            Chart3?Chart3:total,
                            Chart4?Chart4:totalDeaths,
                            Chart5?Chart5:recovered,
                            Chart6?Chart6:null,
                            toDay?toDay:null,
                        ],
                        backgroundColor: [
                            'rgba(10,99,132,0.6)',
                            'rgba(50,99,132,0.6)',
                            'rgba(100,99,132,0.6)',
                            'rgba(255,159,64,0.6)',
                            'rgba(255,255,64,0.6)',
                            '#f1c40f',
                            '#d35400',
                            toDay?'#e74c3c':null,
                            toDay?'#8e44ad':null,
                        ],
                        fontSize: 20,
                    }
                ],
            }}
            width={300}
            height={200}
       
            options={{
                
                 title: {
                    display: this.props.displayTitle,
                    text:"Wykres ilości zachorowań",
                     fontSize:16,
                 },
                 legend: {
                     display: true,
                     position: this.props.legendPosition,
                     fontSize:30,
                 },
                 layout:{
                     padding:{
                         left:20,
                         right:20,
                         bottom:20,
                         top:20,
                     }
                 }
                 }}
          />}

          <div style={{padding:'10px'}}></div>

          {this.props.line&&<Line
            data={{
                labels: ['1day', '10day', '20day', '30day', '40day', '50day' , '60day', 'toDay'],
                datasets: [
                    {
                        label: 'Zainfekowanych osób wirusem Covid-19',
                        data: [
                            Chart0?Chart0:newDeaths,
                            Chart1?Chart1:activeNew,
                            Chart2?Chart2:active,
                            Chart3?Chart3:total,
                            Chart4?Chart4:totalDeaths,
                            Chart5?Chart5:recovered,
                            Chart6?Chart6:null,
                            toDay?toDay:null,
                        ],
                        backgroundColor: [
                            'rgba(10,99,132,0.6)',
                            'rgba(50,99,132,0.6)',
                            'rgba(100,99,132,0.6)',
                            'rgba(255,159,64,0.6)',
                            'rgba(255,255,64,0.6)',
                            'rgba(100,99,132,0.6)',
                            'rgba(255,159,64,0.6)',
                            'rgba(255,255,64,0.6)',
                            
                        ]
                    }
                ],
            }}
          width={300}
          height={200}
          
          options={{
              
               title: {
                  display: this.props.displayTitle,
                   text:"Wykres liniowy ilości zachorowań",
                   fontSize:16,
               },
               legend: {
                   display: true,
                   position: this.props.legendPosition,
               },
               layout:{
                   padding:{
                       left:20,
                       right:20,
                       bottom:20,
                       top:20,
                   }
               }
               }}
        />}
        <div style={{padding:'10px'}}></div>
        
        {this.props.pie&&<Pie
            data={{
                labels: [Chart0?'1day':'Nowe zgony', Chart0?'10day':'Nowe przypadki', Chart0?'20day':'Aktywni', Chart3?'30day':'Wszyscy', 
                Chart0?'40day':'wszystkie zgony', Chart0?'50day':'Wyzdrowiałych' , Chart0&&'60day', Chart0&&'toDay'] ,
                datasets: [
                    {
                        label: 'Zainfekowanych osób wirusem Covid-19',
                        data: [
                            Chart0?Chart0:newDeaths,
                            Chart1?Chart1:activeNew,
                            Chart2?Chart2:active,
                            Chart3?Chart3:total,
                            Chart4?Chart4:totalDeaths,
                            Chart5?Chart5:recovered,
                            Chart6?Chart6:null,
                            toDay?toDay:null,
                        ],
                        backgroundColor: [
                            'rgba(10,99,132,0.6)',
                            'rgba(50,99,132,0.6)',
                            'rgba(100,99,132,0.6)',
                            'rgba(255,159,64,0.6)',
                            'rgba(255,255,64,0.6)',
                            '#f1c40f',
                            '#d35400',
                            '#e74c3c',
                            '#8e44ad',
                        ]
                    }
                ],
            }}
          width={300}
          height={200}
          
          options={{
              
               title: {
                  display: this.props.displayTitle,
                   text:"diagram kołowy ilości zachorowań",
                   fontSize:20,
               },
               legend: {
                   display: true,
                   position: this.props.legendPosition,
                   fontSize:30,
               },
               layout:{
                   padding:{
                       left:20,
                       right:20,
                       bottom:20,
                       top:20,
                   }
               }
               }}
        />}

            </div>

            </>
        )
    }
}

export default Chart; 