import React from 'react';
import Banner from '../components/Banner';
import './Aboutpage.scss';

export default function Aboutpage() {
    return (
        <div>
            <Banner />
            <div className="content">
                <h1>What is UQLoft?</h1>
                <p>Inspired by <a
                    className="link"
                    href="https://uqattic.net/"
                    target="_blank"
                    rel="noreferrer"
                >UQAttic</a>,
                UQLoft is a student-led, collaborative platform for you to share your solutions on past exam papers with fellow UQ students. All of our answers and discussions are entirely crowd-sourced, so we really encourage you to contribute - the more contributors we have, the more reliable our answers will be!<br />There are discussion threads for every question on every exam, because we want you to share not only your answers but also your insights and strategies. This helps you to see questions through others' perspectives, encourages you to show your working out, and lets you identify common mistakes/traps. It's a win-win!</p>
                <h1>Where it all started...</h1>
                <p>UQLoft was first developed by an ambitious first-year team of three engineers and one mathematician for the <a
                    className="link"
                    href="https://uqcs.org/competitions/hackathon-2021/"
                    target="_blank"
                    rel="noreferrer"
                >UQCS Hackathon 2021</a> under the team name <i>Gambrel</i>. It was a very tiring three days, and most of it was spent learning things on the fly, fixing bugs in our (not very well written) code, and enjoying all the nice hackathon food. Much to our surprise, the UQLoft project was well-received by both the judges and competitors alike, and it won the <i>Best Overall Project</i> of the hackathon.<br />The original project has been archived and is not being developed anymore, though you can still visit the repository <a
                    className="link"
                    href="https://github.com/LimaoC/UQLoftHackathon"
                    target="_blank"
                    rel="noreferrer">here</a> and watch our presentation <a
                    className="link"
                    href="https://www.youtube.com/watch?v=ZEAWBDbdPFo&t=792s"
                    target="_blank"
                    rel="noreferrer">here</a>.
                </p>
                <h1>Want to contribute?</h1>
                We would love to have more contributors! As mentioned, we're just a team of first-years who really don't know enough to try and pull this all off. Just head over to our <a
                    className="link"
                    href="https://github.com/LimaoC"
                    target="_blank"
                    rel="noreferrer"
                >GitHub repository</a> and follow the instructions there.
                <h1>Why the name?</h1>
                <p>
                    <a
                        className="link"
                        href="https://www.google.com/search?q=attic+synonym"
                        target="_blank"
                        rel="noreferrer"
                    >Because this.</a>
                </p>
            </div>
        </div>
    );
}