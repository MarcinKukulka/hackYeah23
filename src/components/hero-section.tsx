import Image from "next/image";
import { Button } from "@/ui/button";
import Lantern from "@/public/assets/lantern.png";

export const HeroSection = () => {
	return (
		<section className="flex w-full justify-center bg-sky-100">
			<div className="flex max-w-7xl flex-col-reverse items-center md:flex-row md:content-between ">
				<div className="justify-left mt-5 flex flex-col  items-start gap-y-8 px-8 pb-8">
					<h1 className="break-words text-5xl md:text-7xl">
						Pomagamy w znalezieniu{" "}
						<div className="inline-flex h-[70px] flex-col  items-start overflow-hidden text-center md:h-[70px] xl:h-[90px]">
							<div className="slide-up rounded-md bg-sky-300 px-0.5 text-6xl py-2  md:px-4">szansy</div>

							<div className="slide-up rounded-md bg-sky-300 px-0.5 text-6xl py-2 md:px-4">pracy</div>

							<div className="slide-up rounded-md bg-sky-300 px-0.5 text-6xl py-2 md:px-4">możliwości</div>

							<div className="slide-up rounded-md bg-sky-300 px-0.5 text-6xl py-2 md:px-4">innowacji</div>
						</div>
					</h1>
					<p className="leading-8">
						Nasza misja polega na dostarczaniu informacji i narzędzi, które pomogą Ci w znalezieniu
						wymarzonej pracy.
					</p>
					<Button className="text-md bg-sky-700">Napisz do nas</Button>
				</div>
				<Image width={500} height={400} src={Lantern} alt="Latarnia" />
			</div>
		</section>
	);
};
