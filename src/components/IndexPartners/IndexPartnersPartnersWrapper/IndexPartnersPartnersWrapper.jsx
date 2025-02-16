import { useState, useEffect } from 'react';
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";
import './indexPartnersPartnersWrapper-style.css';
import peopleImg from '@assets/img/partners/people.jpg';
import affirmImg from '@assets/img/partners/affirm.svg';
import symbolSVG from '@assets/svg/symbol/svg/sprite.symbol.svg';
import WesternUnionImg from '@assets/img/partners/WesternUnion.svg';
import TomMazzaferroImg from '@assets/img/partners/Tom Mazzaferro.jpeg';
import { LaptopBreakPoint, TabletBreakPoint, MobileBreakPoint } from "@/constants";
import { PartnersSliderMobile } from './PartnersSliderMobile';
import { PartnersSliderDesktop } from './PartnersSliderDesktop';
import { IndexPartnersPartnersBlockHeadTestimonialsItem } from "./data";

gsap.registerPlugin(ScrollTrigger);

export function IndexPartnersPartnersWrapper() {
    const [isDesktop, setDesktop] = useState(window.innerWidth > MobileBreakPoint);

    useEffect(() => {
        const updateMedia = () => {
            setDesktop(window.innerWidth > MobileBreakPoint);
        };
        window.addEventListener("resize", updateMedia);
        return () => window.removeEventListener("resize", updateMedia);
    });

    useGSAP(() => {
        let mediaQuery = gsap.matchMedia();
        gsap.to(".IndexPartners-partnersBlockHeadTitleLine", {
            transform: 'translateY(0)',
            opacity: 1,
            visibility: "visible",
            stagger: 1,
            duration: 1,
            delay: 1,
            ease: "power1.out",
            scrollTrigger: {
                trigger: ".IndexPartners-partnersBlockHeadTitle",
                start: "top 85%",
                end: "+=20% 110%",
                scrub: 1,
                toggleActions: "play none none none",
                onLeaveBack: self => self.disable(),
            },
        })
        gsap.to(".IndexPartners-partnersBlockHeadDescr", {
            transform: 'translateY(0)',
            opacity: 1,
            visibility: "visible",
            stagger: 1,
            duration: 1,
            delay: 1,
            ease: "power1.out",
            scrollTrigger: {
                trigger: ".IndexPartners-partnersBlockHeadDescr",
                start: "top 105%",
                end: "bottom 110%",
                scrub: 1,
                toggleActions: "play none none none",
                onLeaveBack: self => self.disable(),
            },
        })




        mediaQuery.add({
            isDesktop: `(min-width: ${LaptopBreakPoint}px)`,
            isLaptop: `(max-width: ${LaptopBreakPoint - 1}px) and (min-width: ${TabletBreakPoint + 1}px)`,
            isTablet: `(max-width: ${TabletBreakPoint}px) and (min-width: ${MobileBreakPoint + 1}px)`,
            isMobile: `(max-width: ${MobileBreakPoint}px)`,
        }, (context) => {
            let {isMobile } = context.conditions;
            gsap.to(".IndexPartners-partnersBlockHeadTestimonialsItem", {
                transform: 'translateY(0)',
                opacity: isMobile ? 0 : 1,
                visibility: "visible",
                stagger: 1,
                duration: 1,
                delay: 1,
                ease: "power1.out",
                scrollTrigger: {
                    trigger: ".IndexPartners-partnersBlockHeadTestimonials",
                    start: "top 85%",
                    end: "bottom 110%",
                    scrub: 1,
                    toggleActions: "play none none none",
                    onLeaveBack: self => self.disable(),
                },
            })
            gsap.to(".IndexPartners-partnersBlock--0", {
                transform: 'translateY(0)',
                opacity: isMobile ? 0 : 1,
                visibility: "visible",
                stagger: 1,
                duration: 1,
                delay: 1,
                ease: "power1.out",
                scrollTrigger: {
                    trigger: ".IndexPartners-partnersBlock--0",
                    start: "top 95%",
                    end: "bottom 130%",
                    scrub: 1,
                    toggleActions: "play none none none",
                    onLeaveBack: self => self.disable(),
                },
            })
            gsap.to(".IndexPartners-partnersBlock--1", {
                transform: 'translateY(0)',
                opacity: isMobile ? 0 : 1,
                visibility: "visible",
                stagger: 1,
                duration: 1,
                delay: 1,
                ease: "power1.out",
                scrollTrigger: {
                    trigger: ".IndexPartners-partnersBlock--1",
                    start: "top 82%",
                    end: "bottom 150%",
                    scrub: 1,
                    toggleActions: "play none none none",
                    onLeaveBack: self => self.disable(),
                },
            })
        })
    });

    return (
        <div className="IndexPartners-partnersWrapper">
            <div className="IndexPartners-partnersBlockHead isSectionShown">
                <h2 className="IndexPartners-partnersBlockHeadTitle">
                    <span className="IndexPartners-partnersBlockHeadTitleLine">
                        نحن شركاء النجاح
                    </span>
                    <br />
                    <span className="IndexPartners-partnersBlockHeadTitleLine">
                        حيث نمكن التاجر من صنع تجربة دفع مميزة
                    </span>
                </h2>
                <div className="IndexPartners-partnersBlockHeadDescr">
                    فريقنا ذو خبرات عالمية سوف يساعد في إطلاق الخدمة وتمكينها على نطاق واسع
                    وهدفنا هو نجاحك
                </div>
                <div className="IndexPartners-partnersBlockHeadTestimonials">
                    {
                        IndexPartnersPartnersBlockHeadTestimonialsItem.map((text, index) => (
                            <div key={index} className="IndexPartners-partnersBlockHeadTestimonialsItem">

                                <div className="IndexPartners-partnersBlockHeadTestimonialsItemText">
                                    {text}
                                </div>
                                
                                <div className="IndexPartners-partnersBlockHeadTestimonialsItemIcon">
                                    <svg className="svg svg--icon-partners-item ">
                                        <use xlinkHref={`${symbolSVG}#icon-partners-item`} />
                                    </svg>
                                </div>
                                
                            </div>
                        ))
                    }
                </div>
            </div>
            {
                isDesktop ? <PartnersSliderDesktop /> : <PartnersSliderMobile />
            }
            <div className="IndexPartners-partnersBlocks" style={{ minHeight: isDesktop ? 0 : 442 }}>
                <div className="IndexPartners-partnersBlockHeadTestimonials IndexPartners-partnersBlockHeadTestimonials--mobile IndexPartners-slide isActive isSectionShown">
                    {
                        IndexPartnersPartnersBlockHeadTestimonialsItem.map((text, index) => (
                            <div key={index} className="IndexPartners-partnersBlockHeadTestimonialsItem">

                                <div className="IndexPartners-partnersBlockHeadTestimonialsItemText">
                                   
                                </div>

                                 {text}
                                
                                <div className="IndexPartners-partnersBlockHeadTestimonialsItemIcon">
                                    <svg className="svg svg--icon-partners-item ">
                                        <use xlinkHref={`${symbolSVG}#icon-partners-item`} />
                                    </svg>
                                </div>
                                
                            </div>
                        ))
                    }
                </div>
              
            </div>
        </div>
    )
}
