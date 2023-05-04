import React from 'react';
import { Image } from 'semantic-ui-react'
import Ribbed from "./images/ribbedVaults.jpg"
import LabelledRibbedVault from "./images/labelledRibbedVault.png"
import BookStairs from "./images/bookStairs.jpg"
import LabelledBookStairs from "./images/labelledBookStairs.jpg"
import ReactCompareImage from 'react-compare-image';
import LibraryCongress from "./images/croppedLibraryCongress.jpg"
import labelledLibraryCongress from "./images/labelledLibraryCongress.jpg";
import thousandClownsBefore from "./images/marginalia/thousandClownsBefore_v1.png";
import thousandClownsAfter from "./images/marginalia/thousandClownsAfter_v1.png";
import swordFightBefore from "./images/marginalia/swordFightMarginaliaBefore.png";
import swordFightAfter from "./images/marginalia/swordFightMarginaliaAfter.png";
import titleBefore from "./images/marginalia/TitleMarginaliaBefore.png";
import titleAfter from "./images/marginalia/TitleMarginaliaAfter.png";
import './style/architecture.css'

const marginalia = ({data, location}) => {

    return (
        <div>

<ReactCompareImage leftImage={titleBefore} rightImage={titleAfter}
sliderPositionPercentage=".5"
/>

<ReactCompareImage leftImage={swordFightBefore} rightImage={swordFightAfter}
sliderPositionPercentage=".5"
/>
<ReactCompareImage leftImage={thousandClownsBefore} rightImage={thousandClownsAfter}
sliderPositionPercentage=".5"
/>
</div>
)}

export default marginalia