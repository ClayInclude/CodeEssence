import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import {Paper} from "@mui/material";
import CreateMUI from "@site/Src/Components/MUI/CreateMUI";
import Features, {FeatureItem} from "@site/Src/Css/Data/Features";
import styles from "@site/Src/Pages/Index.module.css";
import Layout from "@theme/Layout";
import clsx from "clsx";
import React from "react";

function HomepageHeader(props: {title: string, subtitle: string}): JSX.Element
{
    return (
        <header className={clsx("hero hero--primary", styles.heroBanner)}>
            <div className="container">
                <h1 className="hero__title">{props.title}</h1>
                <p className="hero__subtitle">{props.subtitle}</p>
            </div>
        </header>
    );
}

function HeroBanner(): JSX.Element
{
    return (
        <div className={styles.hero} data-theme="dark">
            <div className={styles.heroInner}>
                <h1 className={styles.heroProjectTagline}>
                    <span
                        className={styles.heroTitleTextHtml}
                        dangerouslySetInnerHTML={{
                            __html: "Better to <b>run</b> than curse the road"
                        }}
                    />
                </h1>
            </div>
        </div>
    );
}

function Feature({feature}: {feature: FeatureItem}): JSX.Element
{
    const element = (
        <div className="col">
            <Paper elevation={3}>
                <h3 className={clsx(styles.featureHeading)}>{feature.title}</h3>
                <p className="padding-horiz--md">{feature.text}</p>
            </Paper>
        </div>
    );
    return CreateMUI({element});
}

function FeatureRow({features}: {features: FeatureItem[]}): JSX.Element
{
    const CreateFeatureRow = (feature: FeatureItem, index: number): JSX.Element =>
        (<Feature feature={feature} key={index}/>);

    return (
        <div className="row">
            {features.map(CreateFeatureRow)}
        </div>
    );
}

function FeaturesContainer(): JSX.Element
{
    const CreateFeatureGrid = (features: FeatureItem[], index: number): JSX.Element =>
        (<FeatureRow features={features} key={index}/>);

    return (
        <div className="container text--center">
            {Features.map(CreateFeatureGrid)}
        </div>
    );
}

// noinspection JSUnusedGlobalSymbols
export default function Home(): JSX.Element
{
    const {siteConfig: {title, tagline}} = useDocusaurusContext();
    return (
        <Layout
            description={tagline}>
            <HomepageHeader title={title} subtitle={tagline}/>
            <main>
                <HeroBanner/>
                <div className={styles.section}>
                    <FeaturesContainer/>
                </div>
            </main>
        </Layout>
    );
}
