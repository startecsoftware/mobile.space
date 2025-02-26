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
    ),
    Megaphone: (width: number, height: number, stroke: string, strokeWidth: number) => (
        <Svg viewBox="0 0 24 24" fill="none" stroke={stroke}  strokeLinecap="round" strokeLinejoin="round" width={width} height={height}  strokeWidth={strokeWidth}> 
            <Path d="M18 8a3 3 0 0 1 0 6"/> 
            <Path d="M10 8v11a1 1 0 0 1 -1 1h-1a1 1 0 0 1 -1 -1v-5"/>
            <Path d="M12 8h0l4.524 -3.77a.9 .9 0 0 1 1.476 .692v12.156a.9 .9 0 0 1 -1.476 .692l-4.524 -3.77h-8a1 1 0 0 1 -1 -1v-4a1 1 0 0 1 1 -1h8"/>
        </Svg> 
    ),
    Menu: (width: number, height: number, stroke: string, strokeWidth: number) => (
        <Svg viewBox="0 0 24 24" fill="none" stroke={stroke}  strokeLinecap="round" strokeLinejoin="round" width={width} height={height}  strokeWidth={strokeWidth}> 
            <Path d="M4 6l16 0"/> 
            <Path d="M4 12l16 0"/> 
            <Path d="M4 18l16 0"/> 
        </Svg> 
    ),
    Chat: (width: number, height: number, stroke: string, strokeWidth: number) => (
        <Svg viewBox="0 0 24 24" fill="none" stroke={stroke}  strokeLinecap="round" strokeLinejoin="round" width={width} height={height}  strokeWidth={strokeWidth}> 
            <Path d="M12 11v.01"/> 
            <Path d="M8 11v.01"/> 
            <Path d="M16 11v.01"/>
            <Path d="M18 4a3 3 0 0 1 3 3v8a3 3 0 0 1 -3 3h-5l-5 3v-3h-2a3 3 0 0 1 -3 -3v-8a3 3 0 0 1 3 -3z"/> 
        </Svg> 
    ),
    User: (width: number, height: number, stroke: string, strokeWidth: number) => (
        <Svg viewBox="0 0 24 24" fill="none" stroke={stroke}  strokeLinecap="round" strokeLinejoin="round" width={width} height={height}  strokeWidth={strokeWidth}> 
            <Path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0"/>
            <Path d="M12 10m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0"/> 
            <Path d="M6.168 18.849a4 4 0 0 1 3.832 -2.849h4a4 4 0 0 1 3.834 2.855"/> 
        </Svg> 
    ),
    Whatsapp: (width: number, height: number, stroke: string, strokeWidth: number) => (
        <Svg viewBox="0 0 24 24" fill="none" stroke={stroke}  strokeLinecap="round" strokeLinejoin="round" width={width} height={height}  strokeWidth={strokeWidth}> 
            <Path d="M3 21l1.65 -3.8a9 9 0 1 1 3.4 2.9l-5.05 .9"/> 
            <Path d="M9 10a.5 .5 0 0 0 1 0v-1a.5 .5 0 0 0 -1 0v1a5 5 0 0 0 5 5h1a.5 .5 0 0 0 0 -1h-1a.5 .5 0 0 0 0 1"/> 
        </Svg> 
    ),
    Send: (width: number, height: number, stroke: string, strokeWidth: number) => (
        <Svg viewBox="0 0 24 24" fill="none" stroke={stroke}  strokeLinecap="round" strokeLinejoin="round" width={width} height={height}  strokeWidth={strokeWidth}> 
            <Path d="M4.698 4.034l16.302 7.966l-16.302 7.966a.503 .503 0 0 1 -.546 -.124a.555 .555 0 0 1 -.12 -.568l2.468 -7.274l-2.468 -7.274a.555 .555 0 0 1 .12 -.568a.503 .503 0 0 1 .546 -.124z"/> 
            <Path d="M6.5 12h14.5"/> 
        </Svg> 
    ),
    BellNotificationOff: (width: number, height: number, stroke: string, strokeWidth: number) => (
        <Svg viewBox="0 0 24 24" fill="none" stroke={stroke}  strokeLinecap="round" strokeLinejoin="round" width={width} height={height}  strokeWidth={strokeWidth}> 
            <Path d="M10 5a2 2 0 1 1 4 0a7 7 0 0 1 4 6v3a4 4 0 0 0 2 3h-16a4 4 0 0 0 2 -3v-3a7 7 0 0 1 4 -6"/>
            <Path d="M9 17v1a3 3 0 0 0 6 0v-1"/>
        </Svg> 
    ),
    Favorite: (width: number, height: number, stroke: string, strokeWidth: number) => (
        <Svg viewBox="0 0 24 24" fill="none" stroke={stroke}  strokeLinecap="round" strokeLinejoin="round" width={width} height={height}  strokeWidth={strokeWidth}> 
            <Path d="M19.5 12.572l-7.5 7.428l-7.5 -7.428a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572"/>
        </Svg> 
    ),
    Share: (width: number, height: number, stroke: string, strokeWidth: number) => (
        <Svg viewBox="0 0 24 24" fill="none" stroke={stroke}  strokeLinecap="round" strokeLinejoin="round" width={width} height={height}  strokeWidth={strokeWidth}> 
            <Path d="M6 12m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0"/>
            <Path d="M18 6m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0"/>
            <Path d="M18 18m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0"/>
            <Path d="M8.7 10.7l6.6 -3.4"/> 
            <Path d="M8.7 13.3l6.6 3.4"/> 
        </Svg> 
    ),
    Feed: (width: number, height: number, stroke: string, strokeWidth: number) => (
        <Svg viewBox="0 0 24 24" fill="none" stroke={stroke}  strokeLinecap="round" strokeLinejoin="round" width={width} height={height}  strokeWidth={strokeWidth}> 
            <Path d="M7.833 12.278l4.445 -4.445"/> 
            <Path d="M10.055 14.5l2.223 -2.222"/> 
            <Path d="M12.278 16.722l.555 -.555"/> 
            <Path d="M19.828 14.828a4 4 0 0 0 0 -5.656l-5 -5a4 4 0 0 0 -5.656 0l-5 5a4 4 0 0 0 0 5.656l6.171 6.172h3.314l6.171 -6.172z"/> 
        </Svg> 
    ),
    Publications: (width: number, height: number, stroke: string, strokeWidth: number) => (
        <Svg viewBox="0 0 24 24" fill="none" stroke={stroke}  strokeLinecap="round" strokeLinejoin="round" width={width} height={height}  strokeWidth={strokeWidth}> 
            <Path d="M16 6h3a1 1 0 0 1 1 1v11a2 2 0 0 1 -4 0v-13a1 1 0 0 0 -1 -1h-10a1 1 0 0 0 -1 1v12a3 3 0 0 0 3 3h11"/> 
            <Path d="M8 8l4 0"/> 
            <Path d="M8 12l4 0"/>
            <Path d="M8 16l4 0"/>
        </Svg> 
    ),
    Follow: (width: number, height: number, stroke: string, strokeWidth: number) => (
        <Svg viewBox="0 0 24 24" fill="none" stroke={stroke}  strokeLinecap="round" strokeLinejoin="round" width={width} height={height}  strokeWidth={strokeWidth}> 
            <Path d="M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0"/> 
            <Path d="M16 19h6"/> 
            <Path d="M19 16v6"/> 
            <Path d="M6 21v-2a4 4 0 0 1 4 -4h4"/> 
        </Svg> 
    ),
    Following: (width: number, height: number, stroke: string, strokeWidth: number) => (
        <Svg viewBox="0 0 24 24" fill="none" stroke={stroke}  strokeLinecap="round" strokeLinejoin="round" width={width} height={height}  strokeWidth={strokeWidth}> 
            <Path d="M9 7m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0"/> 
            <Path d="M3 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2"/> 
            <Path d="M16 3.13a4 4 0 0 1 0 7.75"/> 
            <Path d="M21 21v-2a4 4 0 0 0 -3 -3.85"/> 
        </Svg> 
    ),
    Question: (width: number, height: number, stroke: string, strokeWidth: number) => (
        <Svg viewBox="0 0 24 24" fill="none" stroke={stroke}  strokeLinecap="round" strokeLinejoin="round" width={width} height={height}  strokeWidth={strokeWidth}> 
            <Path d="M12.802 2.165l5.575 2.389c.48 .206 .863 .589 1.07 1.07l2.388 5.574c.22 .512 .22 1.092 0 1.604l-2.389 5.575c-.206 .48 -.589 .863 -1.07 1.07l-5.574 2.388c-.512 .22 -1.092 .22 -1.604 0l-5.575 -2.389a2.036 2.036 0 0 1 -1.07 -1.07l-2.388 -5.574a2.036 2.036 0 0 1 0 -1.604l2.389 -5.575c.206 -.48 .589 -.863 1.07 -1.07l5.574 -2.388a2.036 2.036 0 0 1 1.604 0z"/>
            <Path d="M12 16v.01"/> 
            <Path d="M12 13a2 2 0 0 0 .914 -3.782a1.98 1.98 0 0 0 -2.414 .483"/> 
        </Svg> 
    ),
    Security: (width: number, height: number, stroke: string, strokeWidth: number) => (
        <Svg viewBox="0 0 24 24" fill="none" stroke={stroke}  strokeLinecap="round" strokeLinejoin="round" width={width} height={height}  strokeWidth={strokeWidth}> 
            <Path d="M12 3a12 12 0 0 0 8.5 3a12 12 0 0 1 -8.5 15a12 12 0 0 1 -8.5 -15a12 12 0 0 0 8.5 -3"/> 
            <Path d="M12 11m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"/> 
            <Path d="M12 12l0 2.5"/> 
        </Svg> 
    ),
    Feedback: (width: number, height: number, stroke: string, strokeWidth: number) => (
        <Svg viewBox="0 0 24 24" fill="none" stroke={stroke}  strokeLinecap="round" strokeLinejoin="round" width={width} height={height}  strokeWidth={strokeWidth}> 
            <Path d="M4 20h4l10.5 -10.5a2.828 2.828 0 1 0 -4 -4l-10.5 10.5v4"/> 
            <Path d="M13.5 6.5l4 4"/> 
        </Svg> 
    ),
    Documents: (width: number, height: number, stroke: string, strokeWidth: number) => (
        <Svg viewBox="0 0 24 24" fill="none" stroke={stroke}  strokeLinecap="round" strokeLinejoin="round" width={width} height={height}  strokeWidth={strokeWidth}> 
            <Path d="M14 3v4a1 1 0 0 0 1 1h4"/> 
            <Path d="M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z"/>
            <Path d="M9 15l2 2l4 -4"/>
        </Svg> 
    ),
    Graph: (width: number, height: number, stroke: string, strokeWidth: number) => (
        <Svg viewBox="0 0 24 24" fill="none" stroke={stroke}  strokeLinecap="round" strokeLinejoin="round" width={width} height={height}  strokeWidth={strokeWidth}> 
            <Path d="M3 3v18h18"/> 
            <Path d="M20 18v3"/> 
            <Path d="M16 16v5"/> 
            <Path d="M12 13v8"/> 
            <Path d="M8 16v5"/> 
            <Path d="M3 11c6 0 5 -5 9 -5s3 5 9 5"/> 
        </Svg> 
    )
}

export default Icons