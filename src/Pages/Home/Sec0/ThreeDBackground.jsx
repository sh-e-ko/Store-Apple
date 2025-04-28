import img from '../../../assets/o.png'
import React, { useEffect, useRef } from "react";
import "./ThreeDBackground.css";  // تأكد من أن الملف CSS صحيح

export default function ThreeDBackground()
{
    const refContainer = useRef(null);
    useEffect(() =>
    {
        let effect;
        // تحميل three.js و Vanta Waves بشكل غير متزامن
        import('three').then((THREE) =>
        {
            import('vanta/dist/vanta.waves.min').then((module) =>
            {
                const WAVES = module.default;
                effect = WAVES({
                    el: refContainer.current,
                    THREE: THREE,
                    color: 0x001B1E,
                    shininess: 30.0,
                    waveHeight: 20.0,
                });
            });
        });
        return () =>
        {
            if (effect) effect.destroy();
        };
    }, []);

    return <div ref={refContainer} style={{ width: '100%', height: '500px' }} />;
}