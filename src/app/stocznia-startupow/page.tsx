"use client";
import React, { useState, useEffect, useRef } from "react";

const ideas = [
	{
		category: "Web Development",
		title: "Interactive Portfolio Website",
		description:
			"Stwórz interaktywną stronę portfolio, która wyróżni Twoje projekty i umiejętności.",
	},
	{
		category: "App Concept",
		title: "Recipe Sharing App",
		description:
			"Opracuj aplikację do dzielenia się przepisami kulinarnymi z innymi pasjonatami gotowania.",
	},
	{
		category: "Design Project",
		title: "Eco-Friendly Product Packaging",
		description:
			"Zaprojektuj ekologiczne opakowania dla produktów, które są przyjazne dla środowiska.",
	},
	{
		category: "Mobile App",
		title: "Mindfulness Meditation App",
		description:
			"Stwórz aplikację do medytacji i relaksacji, która pomaga użytkownikom zredukować stres i poprawić samopoczucie.",
	},
	{
		category: "Community Project",
		title: "Neighborhood Watch App",
		description:
			"Opracuj aplikację dla lokalnych społeczności, która umożliwia mieszkańcom zgłaszanie i monitorowanie incydentów bezpieczeństwa.",
	},
	{
		category: "Game Development",
		title: "Educational Quiz Game",
		description:
			"Zbuduj grę edukacyjną, która pomaga uczniom w nauce różnych przedmiotów poprzez interaktywne quizy.",
	},
	{
		category: "Social Impact",
		title: "Community Clean-up Initiative",
		description:
			"Zorganizuj akcję sprzątania dla społeczności lokalnej w celu poprawy czystości i estetyki okolicy.",
	},
	{
		category: "Educational Initiative",
		title: "Online Language Learning Platform",
		description:
			"Rozpocznij platformę edukacyjną oferującą kursy języków obcych dla osób chcących rozwijać swoje umiejętności lingwistyczne.",
	},
	{
		category: "Tech Innovation",
		title: "Smart Home Automation System",
		description:
			"Opracuj system automatyzacji domu, który umożliwia użytkownikom zdalne sterowanie urządzeniami elektronicznymi i poprawę efektywności energetycznej.",
	},
];

const Talents: React.FC = () => {
	const [selectedTile, setSelectedTile] = useState<number | null>(null);
	const containerRef = useRef<HTMLDivElement>(null);

	const handleClick = (index: number) => {
		setSelectedTile(selectedTile === index ? null : index);
	};

	const handleApplyClick = () => {
		// Tutaj możesz dodać logikę dla przycisku "Aplikuj"
		console.log("Aplikuj kliknięty!");
	};

	useEffect(() => {
		const handleDocumentClick = (event: MouseEvent) => {
			if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
				setSelectedTile(null);
			}
		};

		document.addEventListener("click", handleDocumentClick);

		return () => {
			document.removeEventListener("click", handleDocumentClick);
		};
	}, []);

	return (
		<div className="bg-sky-blue flex flex-col items-center justify-between p-8">
			<div className="mb-4 flex flex-col items-center justify-between">
				<h1 className="text-3xl font-bold">Kuźnia Talentów</h1>
				<p className="text-xl font-semibold">Znajdź swoją szansę</p>
			</div>

			<div ref={containerRef}>
				{selectedTile !== null && (
					<div className="grid w-full max-w-6xl cursor-pointer justify-center">
						<div className="rounded-lg bg-white p-8 text-center shadow-md shadow-sky-100 transition-all hover:bg-sky-100">
							<h2 className="mb-4 text-3xl font-bold text-sky-900">{ideas[selectedTile].title}</h2>
							<p className="mb-2 text-base font-semibold text-gray-600">
								{ideas[selectedTile].category}
							</p>
							<p className="mb-4 text-base text-gray-600">{ideas[selectedTile].description}</p>
							<button
								className="rounded bg-sky-900 px-6 py-3 text-white hover:bg-sky-700"
								onClick={handleApplyClick}
							>
								Aplikuj
							</button>
						</div>
					</div>
				)}

				{!selectedTile && (
					<div className="grid w-full max-w-4xl cursor-pointer grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
						{ideas.map((idea, index) => (
							<div
								key={index}
								className="rounded-lg bg-white p-4 shadow-md shadow-sky-100 transition-all hover:bg-sky-100"
								onClick={() => handleClick(index)}
							>
								<h2 className="mb-2 text-xl font-bold text-sky-900">{idea.title}</h2>
								<p className="mb-2 text-xs font-semibold text-gray-600">{idea.category}</p>
								<p className="mb-2 line-clamp-3 text-gray-600">{idea.description}</p>
							</div>
						))}
					</div>
				)}
			</div>
		</div>
	);
};

export default Talents;