import Svg, { Path } from 'react-native-svg'
const Icons = {
    Houses: (width: number, height: number, stroke: string, strokeWidth: number) => (
        <Svg viewBox="0 0 24 24" fill="none" stroke={stroke}  strokeLinecap="round" strokeLinejoin="round" width={width} height={height}  strokeWidth={strokeWidth}> 
            <Path d="M5 12l-2 0l9 -9l9 9l-2 0"/> 
            <Path d="M5 12v7a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-7"/> 
            <Path d="M9 21v-6a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v6"/> 
        </Svg> 
    ),
    Apartments: (width: number, height: number, stroke: string, strokeWidth: number) => (
        <Svg viewBox="0 0 24 24" fill="none" stroke={stroke}  strokeLinecap="round" strokeLinejoin="round" width={width} height={height}  strokeWidth={strokeWidth}> 
            <Path d="M3 21l18 0"/> 
            <Path d="M5 21v-14l8 -4v18"/> 
            <Path d="M19 21v-10l-6 -4"/> 
            <Path d="M9 9l0 .01"/> 
            <Path d="M9 12l0 .01"/> 
            <Path d="M9 15l0 .01"/> 
            <Path d="M9 18l0 .01"/> 
        </Svg> 
    ),
    Land: (width: number, height: number, stroke: string, strokeWidth: number) => (
        <Svg viewBox="0 0 24 24" fill="none" stroke={stroke}  strokeLinecap="round" strokeLinejoin="round" width={width} height={height}  strokeWidth={strokeWidth}> 
            <Path d="M12 18.5l-3 -1.5l-6 3v-13l6 -3l6 3l6 -3v7.5" /> 
            <Path d="M9 4v13" /> 
            <Path d="M15 7v5.5" /> 
            <Path d="M21.121 20.121a3 3 0 1 0 -4.242 0c.418 .419 1.125 1.045 2.121 1.879c1.051 -.89 1.759 -1.516 2.121 -1.879z" /> 
            <Path d="M19 18v.01" /> 
        </Svg> 
    ),
    Farm: (width: number, height: number, stroke: string, strokeWidth: number) => (
        <Svg viewBox="0 0 24 24" fill="none" stroke={stroke}  strokeLinecap="round" strokeLinejoin="round" width={width} height={height}  strokeWidth={strokeWidth}> 
            <Path d="M3 21l18 0"/>
            <Path d="M4 21v-11l2.5 -4.5l5.5 -2.5l5.5 2.5l2.5 4.5v11"/> 
            <Path d="M12 9m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"/> 
            <Path d="M9 21v-5a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v5"/> 
        </Svg> 
    ),
    Search: (width: number, height: number, stroke: string, strokeWidth: number) => (
        <Svg viewBox="0 0 24 24" fill="none" stroke={stroke}  strokeLinecap="round" strokeLinejoin="round" width={width} height={height}  strokeWidth={strokeWidth}> 
            <Path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0"/> 
            <Path d="M21 21l-6 -6"/> 
        </Svg> 
    ),
    Star: (width: number, height: number, stroke: string, strokeWidth: number) => (
        <Svg viewBox="0 0 24 24" fill="none" stroke={stroke}  strokeLinecap="round" strokeLinejoin="round" width={width} height={height}  strokeWidth={strokeWidth} > 
            <Path d="M17.286 21.09q -1.69 .001 -5.288 -2.615q -3.596 2.617 -5.288 2.616q -2.726 0 -.495 -6.8q -9.389 -6.775 2.135 -6.775h.076q 1.785 -5.516 3.574 -5.516q 1.785 0 3.574 5.516h.076q 11.525 0 2.133 6.774q 2.23 6.802 -.497 6.8" /> 
        </Svg> 
    ),
    ArrowGoBack: (width: number, height: number, stroke: string, strokeWidth: number) => (
        <Svg viewBox="0 0 24 24" fill="none" stroke={stroke}  strokeLinecap="round" strokeLinejoin="round" width={width} height={height}  strokeWidth={strokeWidth}> 
            <Path d="M5 12l14 0"/>
            <Path d="M5 12l6 6"/> 
            <Path d="M5 12l6 -6"/> 
        </Svg> 
    ),
    Localization: (width: number, height: number, stroke: string, strokeWidth: number) => (
        <Svg viewBox="0 0 24 24" fill="none" stroke={stroke}  strokeLinecap="round" strokeLinejoin="round" width={width} height={height}  strokeWidth={strokeWidth}> 
            <Path d="M9 11a3 3 0 1 0 6 0a3 3 0 0 0 -6 0"/> 
            <Path d="M17.657 16.657l-4.243 4.243a2 2 0 0 1 -2.827 0l-4.244 -4.243a8 8 0 1 1 11.314 0z"/>
        </Svg> 
    ),
    PropertyData: (width: number, height: number, stroke: string, strokeWidth: number) => (
        <Svg viewBox="0 0 24 24" fill="none" stroke={stroke}  strokeLinecap="round" strokeLinejoin="round" width={width} height={height}  strokeWidth={strokeWidth}> 
            <Path d="M19.258 10.258l-7.258 -7.258l-9 9h2v7a2 2 0 0 0 2 2h4"/>
            <Path d="M9 21v-6a2 2 0 0 1 2 -2h1.5"/>
            <Path d="M17.8 20.817l-2.172 1.138a.392 .392 0 0 1 -.568 -.41l.415 -2.411l-1.757 -1.707a.389 .389 0 0 1 .217 -.665l2.428 -.352l1.086 -2.193a.392 .392 0 0 1 .702 0l1.086 2.193l2.428 .352a.39 .39 0 0 1 .217 .665l-1.757 1.707l.414 2.41a.39 .39 0 0 1 -.567 .411l-2.172 -1.138z"/>
        </Svg> 
    )
}

export default Icons