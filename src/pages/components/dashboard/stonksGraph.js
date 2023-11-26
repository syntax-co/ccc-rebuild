
import { useEffect,useRef, useState } from "react";
import 'chart.js/auto';
import {Chart as chartjs,Tooltip} from 'chart.js';
import { Line } from "react-chartjs-2";

import fakePrices1 from '@/json_files/price-examples.json';
import fakePrices2 from '@/json_files/price-examples-2.json';

// chartjs.register(Tooltip)


const StonksGraph = ({dataSample=0}) => {



    var dataFile;
    const chart = useRef(null);
    const data = useRef({
        labels:[],
        datasets:[]
    })

    switch (dataSample) {
        case 0:
            dataFile = fakePrices1;
            break;
    
        case 1:
            dataFile = fakePrices2;
            break;

        default:
            break;
    }
    

    const initData = () => {
        // console.log(data.current)
        // const cData = data.current;

        const labels = [];
        const dataset = {
            id:1,
            label:'Prices',
            data:[],
            tension:.3,
            borderColor:'#E94AFF'
        };
        const options = {
            elements:{
                point:{
                    radius:4,
                    backgroundColor:'white',
                    borderColor:'white'
                }
            },
            scales:{
                x:{
                    grid:{
                        color:'#ffffff11'
                    }
                },
                y:{
                    grid:{
                        color:'#ffffff11'
                    }
                }
            },
            plugins:{
                legend:{
                    display:false
                },
                tooltip:{
                    enabled:true,
                    usePointStyle: true,
                }
            }
        }


        dataFile.forEach((item,dex) => {

            if (dex<15) {
                labels.push(dex);
                const price = parseFloat(item.currency.split('$')[1]);
                dataset.data.push(price);
            }
        })

        
        chart.current.data.labels = labels;
        chart.current.data.datasets[0] = dataset;
        chart.current.options = options;
        
        chart.current.update();
        
    }
    
    

    useEffect(() => {
        initData()
    }, []);


    return (
        <div className="w-full h-full flex flex-col items-center justify-center"
        >
            

            <Line 
            ref={chart} 
            data={data.current}
            />
            
        </div>
    );
}
 
export default StonksGraph;
