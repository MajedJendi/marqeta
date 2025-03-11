import { useState, useEffect } from 'react';
import './footer-style.css';
import { FooterSocialIcon } from './data';
import { LaptopBreakPoint } from '@/constants';
import { NavigationDesktop } from './NavigationDesktop';
import { NavigationMobile } from './NavigationMobile';
import { LocalSwitcherDesktop } from './LocalSwitcherDesktop';
import { LocalSwitcherMobile } from './LocalSwitcherMobile';

export function Footer() {
    const [isDesktop, setDesktop] = useState(window.innerWidth > LaptopBreakPoint - 100);
    useEffect(() => {
        const updateMedia = () => {
            setDesktop(window.innerWidth > LaptopBreakPoint - 100);
        };
        window.addEventListener("resize", updateMedia);
        return () => window.removeEventListener("resize", updateMedia);
    });

    return (
        <footer className="MuiBox-root css-11vsetz-Footer-root">
            <div className="MuiContainer-root MuiContainer-maxWidth1044px css-1a8q0rv-MuiContainer-root">
   
                <div className="MuiBox-root css-1xk8vpk-Footer-disclaimerSection">
                    <div className="MuiBox-root css-1xw2nn5-Text-root-Footer-text">
                        <p className="MuiTypography-root MuiTypography-body1 css-15a0tfk-MuiTypography-root">
                            © 2025 Rezma, Inc. جميع الحقوق محفوظة شركة رزمه 2025
                        </p>
                        <hr>
                        </hr>
                        <p>
                        (ذ.م.م)  شركة رزمة الأعمال لتقنية المعلومات 
                        </p>
                        <p>
                            رقم السجل التجاري: 1009207838
                        </p>
                        <p>
                            حي قرطبة، الرياض، المملكة العربية السعودية
                        </p>

                    </div>
                    <div className="MuiBox-root css-fx6pik-Footer-socialWrapper">
                        {
                            FooterSocialIcon.map((item, index) => {
                                const { link, ariaLabel, icon } = item;
                                return (
                                    <a
                                        key={index}
                                        className="css-rseifr-Link-root"
                                        href={link}
                                        target="_self"
                                        rel="noopener noreferrer"
                                        color="inherit"
                                    >
                                        <button
                                            className="MuiButtonBase-root MuiIconButton-root MuiIconButton-sizeLarge css-x2egy5-MuiButtonBase-root-MuiIconButton-root-Link-root"
                                            type="button"
                                            aria-label={ariaLabel}
                                        >
                                            <img src={icon} alt={ariaLabel} className="material-icons notranslate MuiIcon-root MuiIcon-fontSizeMedium css-kp9ftd-MuiIcon-root" />
                                            <span className="MuiTouchRipple-root css-8je8zh-MuiTouchRipple-root" />
                                        </button>
                                    </a>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </footer>
    )
}
