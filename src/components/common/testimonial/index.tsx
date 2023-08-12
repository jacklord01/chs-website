import React, { useState } from "react";
import Slider from "react-slick";

interface testimonialProps {}

const Testimonial: React.FC<testimonialProps> = () => {
	const [isShowing, setIsShowing] = useState(true);

	const settings = {
		className: "center",
		centerMode: true,
		infinite: true,
		centerPadding: "0px",
		slidesToShow: 3,
		speed: 500,
		arrows: false,
		focusOnSelect: true,
		responsive: [
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 2.3,
					centerPadding: "0px",
				},
			},
			{
				breakpoint: 640,
				settings: {
					slidesToShow: 1,
					dots: true,
				},
			},
		],
	};

	return (
		<div className="app-testimonial py-[75px]">
			<div className="container mx-auto px-[16px]">
				<div className="title text-center">
					<h1 className="sm:max-w-full max-w-[200px] m-auto">
						<b>What Our Customers Say</b>
					</h1>
				</div>
				<div className="app-carousel">
					<Slider {...settings}>
						{TestimonialData.map(item => (
							<div className="item" key={item.id}>
								<svg
									width="63"
									height="63"
									viewBox="0 0 63 63"
									fill="rgba(13, 13, 13, 0.15)"
								>
									<use href="/images/sprite.svg#svg-quote"></use>
								</svg>
								<p className="description">
									{isShowing ? item.preview : item.fullReview}
									<span
										className="underline underline-offset-2 cursor-pointer hover:text-[#08A8FF] pl-1"
										onClick={() => setIsShowing(!isShowing)}
									>
										{isShowing ? "Read More" : "Hide Details"}
									</span>
								</p>
								<div className="regards">
									<h2 className="font-[Antro-vectra] text-[25px] text-[#08A8FF]">
										{item.name}
									</h2>
									<p>{item.title}</p>
								</div>
							</div>
						))}
					</Slider>
				</div>

				{/* <div className="block text-center">
					<button className="btn btn-primary outline secondary-hover">
						See More
					</button>
				</div> */}
			</div>
		</div>
	);
};

export default Testimonial;

interface TestimonialType {
	id: number;
	name: string;
	title: string;
	preview: string;
	fullReview: string;
}

const TestimonialData: Array<TestimonialType> = [
	{
		id: 1,
		name: "Sue M",
		title: "Churchfield Home Services Customer",
		preview:
			"Really professional service. Can't thank the team at Churchfield enough, we were informed of everything every step of the way, the house is lovely and warm, and the team, David, Alex and Viktor were lovely to deal with.",
		fullReview:
			"Really professional service. Can't thank the team at Churchfield enough, we were informed of everything every step of the way, the house is lovely and warm, and the team, David, Alex and Viktor were lovely to deal with.",
	},
	{
		id: 2,
		name: "Antoinette K",
		title: "Churchfield Home Services Customer",
		preview:
			"To Cosmin and all the team.. Thank you all for doing such a wonderful job on our house, getting external and attic insulation, solar panels, new boiler. Work ethic was unbelievable. Cleaned up every day. Communicated with us all the time. ",
		fullReview:
			"To Cosmin and all the team.. Thank you all for doing such a wonderful job on our house, getting external and attic insulation, solar panels, new boiler. Work ethic was unbelievable. Cleaned up every day. Communicated with us all the time. I have to say a big thank you to Caroline who guided us through all the grant paperwork .. we would highly recommend using Churchfield home services and we are so happy with our lovely warm home now. Thank you all again!!",
	},
	{
		id: 3,
		name: "Fergus R",
		title: "Churchfield Home Services Customer",
		preview:
			"We engaged Churchfield Home Services for external insulation and attic insulation on our 1950s semi-detached bungalow. From the very first communication we found Churchfield extremely professional and a pleasure to deal with.",
		fullReview:
			"We engaged Churchfield Home Services for external insulation and attic insulation on our 1950s semi-detached bungalow. From the very first communication we found Churchfield extremely professional and a pleasure to deal with. When Cosmin Luca, our project manager arrived onsite, no question or query was ever a problem, he was extremely prompt with all requests. Our work was carried out by Alex, who was a pleasure to have around, his attention to detail was incredible and he completed the work to the highest of standards. Our job has just been completed and the cold weather has arrived, straight away we have noticed a huge difference in the temperature in our house. We would highly recommend Churchfield Home Services to anybody looking for this service.",
	},
	{
		id: 4,
		name: "Ray C",
		title: "Churchfield Home Services Customer",
		preview:
			"We were very happy with Churchfield. The initial consultations were clear and detailed, going through all elements of the work. They arranged a date with us, contacted us a week before to confirm and set out what would happen on each...",
		fullReview:
			"We were very happy with Churchfield. The initial consultations were clear and detailed, going through all elements of the work. They arranged a date with us, contacted us a week before to confirm and set out what would happen on each day of the first week, and stuck to what they said. The teams doing the work were excellent - fast, very high standard, and very clean and tidy. The administration team were very responsive to all our questions, and the project manager checked the work, spotted snags, and ensured everything was completed to a high standard. Would recommend to anyone.",
	},
	{
		id: 5,
		name: "Paul M",
		title: "Churchfield Home Services Customer",
		preview:
			"Churchfield carried out external insulation and attic insulation of our home. Professional from quotation to applying for grant to completion of project. Workmanship was excellent.",
		fullReview:
			"Churchfield carried out external insulation and attic insulation of our home. Professional from quotation to applying for grant to completion of project. Workmanship was excellent.",
	},
	{
		id: 6,
		name: "Unknown",
		title: "Churchfield Home Services Customer",
		preview:
			"External insulation. I highly recommend Churchfield and their team since they have worked in my house to provide us of external insulation. Since day 1 contact they have been highly professional, punctual and with quote really well...",
		fullReview:
			"External insulation. I highly recommend Churchfield and their team since they have worked in my house to provide us of external insulation. Since day 1 contact they have been highly professional, punctual and with quote really well explained and detailed. Communication is great from surveyor to project manager to sales advisor. Marius and his team take pride of their work and as such they build at perfection. They were very respectful, clean and they look at every detail, the project manager supervised and keep checking on the work progress all the time. This is my first time seeing worker leaving a place as they found it. One of the most professional team I have dealt in regard to builds. I would give them more starts if there were more. Thank you to all the team. My house is now cosy and looking amazing.",
	},
];
