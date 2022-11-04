import { View } from 'react-native'

import { LineChart, YAxis, Grid } from 'react-native-svg-charts'

function GraficoLinha() {
    const data = [50, 10, 40, 95, -4, -24, 85, 91, 35, 53, -53, 24, 50, -20, -80] //valores quaisqueres pro gráfico

    const contentInset = { top: 20, bottom: 20 }

    return <View style={{ marginTop: 30, flex: 1 }}>
        <YAxis
            data={data}
            contentInset={contentInset}
            svg={{
                fill: 'grey',
                fontSize: 10,
            }}
            numberOfTicks={10}
            formatLabel={(value) => `${value}ºC`}
        />
        <LineChart
            style={{ flex: 1, marginLeft: 16 }}
            data={data}
            svg={{ stroke: 'rgb(134, 65, 244)' }}
            contentInset={contentInset}
        >
            <Grid />
        </LineChart>
    </View>
}

export default GraficoLinha;