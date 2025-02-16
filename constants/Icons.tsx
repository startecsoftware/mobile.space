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
    ),
    Bed: (width: number, height: number, stroke: string, strokeWidth: number) => (
        <Svg viewBox="0 0 24 24" fill="none" stroke={stroke}  strokeLinecap="round" strokeLinejoin="round" width={width} height={height}  strokeWidth={strokeWidth}> 
            <Path d="M7 9m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"/>
            <Path d="M22 17v-3h-20"/> 
            <Path d="M2 8v9"/> 
            <Path d="M12 14h10v-2a3 3 0 0 0 -3 -3h-7v5z"/>
        </Svg> 
    ),
    Bath: (width: number, height: number, stroke: string, strokeWidth: number) => (
        <Svg viewBox="0 0 24 24" fill="none" stroke={stroke}  strokeLinecap="round" strokeLinejoin="round" width={width} height={height}  strokeWidth={strokeWidth}> 
            <Path d="M4 12h16a1 1 0 0 1 1 1v3a4 4 0 0 1 -4 4h-10a4 4 0 0 1 -4 -4v-3a1 1 0 0 1 1 -1z"/>
            <Path d="M6 12v-7a2 2 0 0 1 2 -2h3v2.25"/> 
            <Path d="M4 21l1 -1.5"/> 
            <Path d="M20 21l-1 -1.5"/>
        </Svg> 
    ),
    Car: (width: number, height: number, stroke: string, strokeWidth: number) => (
        <Svg viewBox="0 0 24 24" fill="none" stroke={stroke}  strokeLinecap="round" strokeLinejoin="round" width={width} height={height}  strokeWidth={strokeWidth}> 
            <Path d="M5 20a2 2 0 1 0 4 0a2 2 0 0 0 -4 0" /> 
            <Path d="M15 20a2 2 0 1 0 4 0a2 2 0 0 0 -4 0" /> 
            <Path d="M5 20h-2v-6l2 -5h9l4 5h1a2 2 0 0 1 2 2v4h-2m-4 0h-6m-6 -6h15m-6 0v-5" /> 
            <Path d="M3 6l9 -4l9 4" /> 
        </Svg> 
    ),
    Check: (width: number, height: number, stroke: string, strokeWidth: number) => (
        <Svg viewBox="0 0 24 24" fill="none" stroke={stroke}  strokeLinecap="round" strokeLinejoin="round" width={width} height={height}  strokeWidth={strokeWidth}> 
            <Path d="M5 12l5 5l10 -10"/>
        </Svg> 
    ),
    Clock: (width: number, height: number, stroke: string, strokeWidth: number) => (
        <Svg viewBox="0 0 24 24" fill="none" stroke={stroke}  strokeLinecap="round" strokeLinejoin="round" width={width} height={height}  strokeWidth={strokeWidth}> 
            <Path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0"/> 
            <Path d="M12 12h3.5"/> 
            <Path d="M12 7v5"/> 
        </Svg> 
    ),
    LayoutHome: (width: number, height: number, stroke: string, strokeWidth: number) => (
        <Svg viewBox="0 0 24 24" fill="none" stroke={stroke}  strokeLinecap="round" strokeLinejoin="round" width={width} height={height}  strokeWidth={strokeWidth}> 
            <Path d="M21 12l-9 -9l-9 9h2v7a2 2 0 0 0 2 2h6"/>
            <Path d="M9 21v-6a2 2 0 0 1 2 -2h2c.39 0 .754 .112 1.061 .304"/> 
            <Path d="M19 21.5l2.518 -2.58a1.74 1.74 0 0 0 0 -2.413a1.627 1.627 0 0 0 -2.346 0l-.168 .172l-.168 -.172a1.627 1.627 0 0 0 -2.346 0a1.74 1.74 0 0 0 0 2.412l2.51 2.59z"/>
        </Svg> 
    ),
    Ad: (width: number, height: number, stroke: string, strokeWidth: number) => (
        <Svg viewBox="0 0 24 24" fill="none" stroke={stroke}  strokeLinecap="round" strokeLinejoin="round" width={width} height={height}  strokeWidth={strokeWidth}> 
            <Path d="M11.933 5h-6.933v16h13v-8"/> 
            <Path d="M14 17h-5"/> 
            <Path d="M9 13h5v-4h-5z"/> 
            <Path d="M15 5v-2"/> 
            <Path d="M18 6l2 -2"/> 
            <Path d="M19 9h2"/> 
        </Svg> 
    ),
    Auth: (width: number, height: number, stroke: string, strokeWidth: number) => (
        <Svg viewBox="0 0 24 24" fill="none" stroke={stroke}  strokeLinecap="round" strokeLinejoin="round" width={width} height={height}  strokeWidth={strokeWidth}> 
            <Path d="M16.555 3.843l3.602 3.602a2.877 2.877 0 0 1 0 4.069l-2.643 2.643a2.877 2.877 0 0 1 -4.069 0l-.301 -.301l-6.558 6.558a2 2 0 0 1 -1.239 .578l-.175 .008h-1.172a1 1 0 0 1 -.993 -.883l-.007 -.117v-1.172a2 2 0 0 1 .467 -1.284l.119 -.13l.414 -.414h2v-2h2v-2l2.144 -2.144l-.301 -.301a2.877 2.877 0 0 1 0 -4.069l2.643 -2.643a2.877 2.877 0 0 1 4.069 0z" /> 
            <Path d="M15 9h.01" /> 
        </Svg> 
    )
}

export default Icons