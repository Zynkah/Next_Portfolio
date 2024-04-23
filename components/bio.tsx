import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function Bio() {
return (
    <Card>
        <CardHeader>
            <CardTitle>Software Engineer</CardTitle>
        </CardHeader>
        <CardContent className="text-pretty">
            <h3 className="text-muted-foreground">Professional Background:</h3>
            <p className="mt-2 mb-4">
                I began my journey as a self-taught developer and further enhanced my skills through a bootcamp. Following my graduation, I secured an internship with Danicas Custom Bakes, which eventually led to my first junior software engineer position within a year.
            </p>

            <h3 className="text-muted-foreground">Inspiration and Motivation:</h3>
            <p className="mt-2 mb-4">
                My passion for building websites is fueled by the games and anime that shaped my upbringing. During my bootcamp, I developed a mock maid cafe website as a final project, and subsequently worked on a personal project inspired by Final Fantasy X, creating a Wikipedia-style website.
            </p>

            <h3 className="text-muted-foreground">Aspirations and Goals:</h3>
            <ul className="mt-2 space-y-2 list-disc ml-4">
                <li>
                    Continuously grow as a full stack developer and expand my skillset.
                </li>
                <li>Undertake novel and unique projects that showcase my abilities.</li>
                <li>
                    Explore emerging technologies, libraries, and programming languages to stay at the forefront of the industry.
                </li>
                <li>
                    Engage with coding communities and collaborate effectively with peers as a team-player.
                </li>
            </ul>
        </CardContent>
    </Card>
);
}
