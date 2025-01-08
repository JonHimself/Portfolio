import React from 'react';
import Seperator from '../../common/socials/separator/Seperator';
import './AboutMe.css';

const AboutMe = () => {
	return (
		<div className='aboutme'>
			<Seperator />
			<label htmlFor='' className='section-title'>
				About Me
			</label>
			<section className='aboutme-info'>
				<p>
					Hi, my name is Jon Robeson. To start things off right, I'd like to say thank you for visiting my portfolio and thank you again for reading
					the About Me. Before any journey we should know what we're getting into, and I'm glad you're taking some time to get to know me. I'm a full
					stack developer from the U.S., but web development is not where my professional life began. In 2016 I graduated from the University of
					Houston, receiving a bachelors of business administration from the Bauer Business School. For the next 5 years I worked in start-ups as a
					Market Manager and then as an IT support guru for a church in my hometown.
				</p>
				<p>
					The working-life is awesome, there's routine, responsibility, and growth. I won an award in 2019 for my stellar work ethic. Yes, the award
					is on a piece of paper with a rainbow, a star, and a caption that reads "great job!", and yes again, it is still on my fridge. I never felt
					as if I was lacking, I was employed and have enough disposable income to pursue my hobbies. But, and there is a giant "however" to this, the
					world shut down in 2020 and I realized the control over my trajectory was shifting. The start-up I worked for halted business immediately
					-we were heavily tied to restaurants and bars- and the church I worked at closed its doors. With no office to go into, and no sign of when
					"business as usual" would return, the time for a pivot and a new direction was upon me.
				</p>
				<p>
					Challenges are exciting, especially those with a lot riding on them. Can you imagine a challenge larger than controlling destiny? That is
					what I intended to do. What else did I have to lose? I could choose to stay isolated, hoping my career and myself would be okay on the other
					side, or I could step onto the path of the hero's journey, traverse the underworld, and come out refined. I felt, and still feel as if,
					development brings freedom, freedom from relying on anything other than the talents I worked so hard for. No longer would I need to pray
					that there would be an office to go into, or that the world would not be left with an indelible mark. I could work from anywhere, for
					anyone, at any time. So, In 2021, I made a pivot in my professional life and began coding. I started watching tutorials, using free
					resources, and building small projects. Then, in July of 2021, I enrolled in DevMountain and graduated that November.
				</p>
				<p>
					After all that effort, change, and copious amounts of elbow grease, I couldn't be happier to call myself a developer. And on my journey I
					was never alone, I met and programmed with many fellow travellers that I now consider close friends. Destiny is what led me to become a full
					stack developer, and now destiny has made a fork in your path and mine.
				</p>
				<p>Thank you, Reader</p>
				<strong className='signature'>JBR</strong>
			</section>
		</div>
	);
};

export default AboutMe;
