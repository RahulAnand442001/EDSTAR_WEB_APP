import React from 'react'
import {useParams} from "react-router-dom"

import "../CSS/resourceList.css"
import {DefaultInterior} from "../Pages/CourseInterior"
import Header from "../Pages/Components/Header"
import Footer from "../Pages/Components/Footer"

//media files
import QuizophileTemplete from "../media/quizophileTemplete.jpg"
import AcademicBankTemplete from "../media/academicBankTemplete.jpg"
import NewsPaperTemplete from "../media/NewsPaperTemplete.jpg"
import ScienceReporterTemplete from "../media/ScienceReporterTemplete.jpg"
import VAMTemplete from "../media/vamTemplete.jpg"

function ResourceInteior() {

    const {resourceName} = useParams();

    switch (resourceName) {

        case("Quizophile"):
            return (<Quizophile/>)
        case("Academic-Bank"):
            return (<AcademicBank/>)
        case("Newspaper"):
            return (<Newspaper/>)
        case("Science-Reporters"):
            return (<ScienceReporters/>)
        case("Value-Added-Materials"):
            return (<ValueAddedMaterials/>)
        default:
            return (<DefaultInterior/>)
    }

}

export default ResourceInteior

function Quizophile() {
    return (
        <div>
            <div className="Resource Quizophile">
                <Header/>
                <h1 className="resource-interior-heading quizophile-heading">QUIZOPHILE</h1>
                <div className="resource-basic-content quizophile-content">
                    <img
                        src={QuizophileTemplete}
                        alt="Quizophile"
                        className="resource-content-photo quizophile-photo"/>
                    <p className="resource-basic-text quizophile-text">
                        Partcipate in daily quiz from different subject domains and enhance your skills.
                        <a href="https://forms.gle/m6pLEbfx13cyipLWA" className="daily-quiz-link">Test Your Knowledge</a>

                    </p>
                </div>
            </div>
            <Footer/>

        </div>
    )
}

function AcademicBank() {
    return (
        <div>
            <Header/>
            <div className="Resource AcademicBank">
                <h1 className="resource-interior-heading academicBank-heading">Academic Bank</h1>
                <div className="resource-basic-content academicBank-content">
                    <img
                        src={AcademicBankTemplete}
                        alt="Academic Bank"
                        className="resource-content-photo academicBank-photo"/>
                    <p className="resource-basic-text academicBank-text">
                        Get complete NCERT guide covering important questions, key solutions, sample
                        papers, PYQs, etc. and cover every important topics from exam point of view.
                    </p>
                </div>
                <div className="ab-materials">
                    <div className="ncert">
                        <h5 className="materials-heading ncert-materials">NCERT MATERIALS</h5>
                        <div className="ncert-buttons">
                            <a
                                href="https://drive.google.com/drive/folders/1CKQvbYcSU8Stl2VMVNMMuk2HLbHfphBK?usp=sharing"
                                className="class class-6">CLASS-6</a>
                            <a
                                href="https://drive.google.com/drive/folders/1Bzx-uueL0qyZJ7jKTBPsIJXGOAaRxl3F?usp=sharing"
                                className="class class-7">CLASS-7</a>
                            <a
                                href="https://drive.google.com/drive/folders/1vvI_TrbGANhVJLjOjpysCnN82iQpHWQH?usp=sharing"
                                className="class class-8">CLASS-8</a>
                            <a
                                href="https://drive.google.com/drive/folders/1p_WexcoYSCjgTMJ0Ih648MOKrFn5La6S?usp=sharing"
                                className="class class-9">CLASS-9</a>
                            <a
                                href="https://drive.google.com/drive/folders/1nwqxeoWj2Wok_CfOSSzWjNAi0yb5HDNa?usp=sharing"
                                className="class class-10">CLASS-10</a>
                            <a
                                href="https://drive.google.com/drive/folders/1K5r-DgL4jd_nPNf-_IeUe8DfMsKC3RWj?usp=sharing"
                                className="class class-11">CLASS-11</a>
                            <a
                                href="https://drive.google.com/drive/folders/1cIedl9cSDCj-LVcrGyoSClpmy2yC0fh5?usp=sharing"
                                className="class class-12">CLASS-12</a>
                        </div>
                    </div>
                    <div className="pyq-section">
                        <h5 className="materials-heading pyq">PREVIOUS YEAR QUESTIONS</h5>
                        <div className="pyq">
                            <a
                                href="https://drive.google.com/drive/folders/1J2HYO2qDhM7xsYm9MzSXBSByG_GuO4Kn?usp=sharing"
                                className="pyq-yr pyq-10">CLASS 10</a>
                            <a
                                href="https://drive.google.com/drive/folders/1NhacwheZ5w6rJOhLM4AEG8je3QXEN2zW?usp=sharing"
                                className="pyq-yr pyq-12">CLASS 12</a>
                        </div>
                    </div>
                    <div className="sample-questions">
                        <h5 className="materials-heading sample-q">SAMPLE QUESTION PAPERS</h5>
                        <div className="sqp">
                            <a
                                href="https://drive.google.com/drive/folders/1hPJqne8QahrRWkN9wsjHhg13QKLMQUqj?usp=sharing"
                                className="sq sq-10">CLASS 10</a>
                            <a
                                href="https://drive.google.com/drive/folders/1hQcrJEA1qruofXmQe8xSVvbYl6CLcMIk?usp=sharing"
                                className="sq sq-12">CLASS 12</a>
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>

        </div>
    )
}

function Newspaper() {
    return (
        <div>
            <Header/>

            <div className="Resource Newspaper">
                <h1 className="resource-interior-heading newspaper-heading">Newspaper</h1>
                <div className="resource-basic-content newspaper-content">
                    <img
                        src={NewsPaperTemplete}
                        alt="Newspaper"
                        className="resource-content-photo newspaper-photo"/>
                    <p className="resource-basic-text newspaper-text">
                        In this section, you will get daily newspapers of different print house covering
                        The Hindu, Indian Express, Times of India, and many more...Enjoy daily morning
                        newspaper with a cup of tea without any charges.
                    </p>
                </div>
                <h4 className="newspaper-subheading">Monthly Updates</h4>
                <div className="monthly-newspaper-buttons">
                    {/* <div className="month_1-6">
                        <a
                            href="https://drive.google.com/drive/folders/1kXvk5QFhjDez9hl6rS_o9rX0YWxjM7uP?usp=sharing"
                            className="month np-month-1">JANUARY 2020</a>
                        <a
                            href="https://drive.google.com/drive/folders/1DAMfu9a_yIffbXYRE8SStdtgYdwaulGv?usp=sharing"
                            className="month np-month-2">FEBRUARY 2020</a>
                        <a
                            href="https://drive.google.com/drive/folders/1LbfU0dZiVl1DUQciKwJ4bbijoxpEJt5-?usp=sharing"
                            className="month np-month-3">MARCH 2020</a>
                        <a
                            href="https://drive.google.com/drive/folders/1n3Iv7pXXSS8Tlag_xqERYzTGZBbCeAcu?usp=sharing"
                            className="month np-month-4">APRIL 2020</a>
                        <a
                            href="https://drive.google.com/drive/folders/1RTKlT-lSB4Uep2Xr-Vaihq5Ke5PZ-Chv?usp=sharing"
                            className="month np-month-5">MAY 2020</a>
                        <a
                            href="https://drive.google.com/drive/folders/1x0WifZpcQUz-jKbi2ZJfs-uHfWkZlBp1?usp=sharing"
                            className="month np-month-6">JUNE 2020</a>
                    </div> */}
                    <div className="month_7-12">
                        {/* <a
                            href="https://drive.google.com/drive/folders/1kVxMWcpwGXVfsMoi4fuOwQcojGMdpLVZ?usp=sharing"
                            className="month np-month-7">JULY 2020</a>
                        <a
                            href="https://drive.google.com/drive/folders/1vNSHCWU8G2yGVet0PbHG6PxnqX3LR13P?usp=sharing"
                            className="month np-month-8">AUGUST 2020</a>
                        <a
                            href="https://drive.google.com/drive/folders/1zBNdNKoYTHlyeFFyHRq_CT9TTGssW1SK?usp=sharing"
                            className="month np-month-9">SEPTEMBER 2020</a>
                        <a
                            href="https://drive.google.com/drive/folders/1NeqA_TSfP3u7JdWczNI_12IP_AGJJ6Q4?usp=sharing"
                            className="month np-month-10">OCTOBER 2020</a> */}
                        <a
                            href="https://drive.google.com/drive/folders/1BG-D4dG2wB8SA4sZLYnlIE8PEFx8uhys?usp=sharing"
                            className="month np-month-11">NOVEMBER 2020</a>
                        {/* <a href="" className="month np-month-12 ytc">DECEMBER 2020</a>
                        <a href="" className="month np-month-12 ytc">JANUARY 2021</a> */}
                    </div>
                </div>
            </div>
            <Footer/>

        </div>
    )
}

function ScienceReporters() {
    return (
        <div>
            <Header/>
            <div className="Resource ScienceReporters">
                <h1 className="resource-interior-heading sr-heading">Science Reporters
                </h1>
                <div className="resource-basic-content sr-content">
                    <img
                        src={ScienceReporterTemplete}
                        alt="Science Reporter"
                        className="resource-content-photo sr-photo"/>
                    <p className="resource-basic-text sr-text">
                        In this section, you can access monthly Science magazine to know happenings
                        around the country and world in the field of Science and Technology. Enrich
                        yourself with scientific developments happening globally.
                    </p>
                </div>
                <div className="monthly-magazines">
                    {/* <a
                        href="https://drive.google.com/drive/folders/1P3x5-qu7xOy0yaS3od2f82MO-DbeuciH?usp=sharing"
                        className="magazine magazine-month-1">JANUARY 2020</a>
                    <a
                        href="https://drive.google.com/drive/folders/1mJZrkxAb4VixKEnXr3Y1cKcBlaujVgfd?usp=sharing"
                        className="magazine magazine-month-2">FEBRUARY 2020</a>
                    <a
                        href="https://drive.google.com/drive/folders/1sGu76gX8uIaq2AV8CazxonDxjCKmcRm8?usp=sharing"
                        className="magazine magazine-month-3">MARCH 2020</a>
                    <a
                        href="https://drive.google.com/drive/folders/1tA0oQnRye9oJ5q87lpWCAO4MDZRw4DOR?usp=sharing"
                        className="magazine magazine-month-4">APRIL 2020</a>
                    <a
                        href="https://drive.google.com/drive/folders/14y6ZMw_ONXzRmive6rt71joWwG-slHG1?usp=sharing"
                        className="magazine magazine-month-5">MAY 2020</a>
                    <a
                        href="https://drive.google.com/drive/folders/1FNemwhPJ937md2effqCQo7QyioPa3OOX?usp=sharing"
                        className="magazine magazine-month-6">JUNE 2020</a>
                    <a
                        href="https://drive.google.com/drive/folders/17N1q3MeBlPtL-_d9ZJexpvAzr7SO53AM?usp=sharing"
                        className="magazine magazine-month-7">JULY 2020</a>
                    <a
                        href="https://drive.google.com/drive/folders/1XytE5WD3LW7hKx2k3MZkqCu3lcx415iq?usp=sharing"
                        className="magazine magazine-month-8">AUGUST 2020</a> */}
                    <a
                        href="https://drive.google.com/drive/folders/1TZewd_TPrQH6fguUBf3lAXZYD5meh8rx?usp=sharing"
                        className="magazine magazine-month-9">SEPTEMBER 2020</a>
                    <a
                        href="https://drive.google.com/drive/folders/1o5gyaTCHdPsvf7sP6HqwdSf9hck7Ogsl?usp=sharing"
                        className="magazine magazine-month-10">OCTOBER 2020</a>
                    <a
                        href="https://drive.google.com/drive/folders/14xdRGF48H2dm8jsUnsr4GVwqao35rFtb?usp=sharing"
                        className="magazine magazine-month-11">NOVEMBER 2020</a>
                    {/* <a href="" className="magazine magazine-month-12 ytc">DECEMBER 2020</a> */}
                </div>
            </div>
            <Footer/>

        </div>
    )
}

function ValueAddedMaterials() {
    return (
        <div>
            <Header/>
            <div className="Resource ValueAddedMaterials">
                <h1 className="resource-interior-heading vam-heading">Value Added Materials</h1>
                <div className="resource-basic-content vam-content">
                    <img src={VAMTemplete} alt="VAM" className="resource-content-photo vam-photo"/>
                    <p className="resource-basic-text vam-text">This section covers contents,
                        studies, reports, and many things covering various disciplines.</p>
                </div>
                <div className="monthly-vams">
                    {/* <a
                        href="https://drive.google.com/drive/folders/1mGD94Ts6zr0W5NWWVdPsOsFH_CtyXbI6?usp=sharing"
                        className="vam vam-month-1">JANUARY 2020</a>
                    <a
                        href="https://drive.google.com/drive/folders/1fHfX10q39wjrpIoh_KtK-RK9uFeliyZ_?usp=sharing"
                        className="vam vam-month-2">FEBRUARY 2020</a>
                    <a
                        href="https://drive.google.com/drive/folders/1FZBowNq-WdEDI6b2Gwy05NhZhFhScTOa?usp=sharing"
                        className="vam vam-month-3">MARCH 2020</a>
                    <a
                        href="https://drive.google.com/drive/folders/1FbSZYfwCQiyeZYQeLmkxupAwq_lctZgt?usp=sharing"
                        className="vam vam-month-4">APRIL 2020</a>
                    <a
                        href="https://drive.google.com/drive/folders/1-BesX9nClPR0D8UTqu6rLG_vuj8okyvg?usp=sharing"
                        className="vam vam-month-5">MAY 2020</a>
                    <a
                        href="https://drive.google.com/drive/folders/1329wvyDS0Ut9cllY4ooYhVARdy_EZ6UP?usp=sharing"
                        className="vam vam-month-6">JUNE 2020</a>
                    <a
                        href="https://drive.google.com/drive/folders/1THmNYNQbX8Nm54QbUglDsSQa4QTWgt51?usp=sharing"
                        className="vam vam-month-7">JULY 2020</a>
                    <a
                        href="https://drive.google.com/drive/folders/1EUXNCyLBQBoJJYSoJUf5Z4RObwF04aqU?usp=sharing"
                        className="vam vam-month-8">AUGUST 2020</a>
                    <a
                        href="https://drive.google.com/drive/folders/1oVcs0p0jcTp_piccQXDNPmlVLSi5_PZ3?usp=sharing"
                        className="vam vam-month-9">SEPTEMBER 2020</a>
                    <a
                        href="https://drive.google.com/drive/folders/15Ha4kVXpOlbff5R3lXK1kDuRPSW9os90?usp=sharing"
                        className="vam vam-month-10">OCTOBER 2020</a> */}
                    <a
                        href="https://drive.google.com/drive/folders/1Ru05NxE-wVpEQFaAY_DLG747ckInSm6y?usp=sharing"
                        className="vam vam-month-11">NOVEMBER 2020</a>
                    {/* <a href="" className="vam vam-month-12 ytc">DECEMBER 2020</a>
                    <a href="" className="vam vam-month-12 ytc">JANUARY 2021</a> */}
                </div>
            </div>
            <Footer/>
        </div>
    )
}
