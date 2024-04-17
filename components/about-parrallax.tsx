import { motion } from "framer-motion";
import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";


export default function AboutParallax() {
  return (
    <div className="flex flex-row gap-8">
      {/* <motion.div
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                className="bg-red-500 h-96 w-96"
            /> */}
      <Card className="basis-2/3">
        <CardHeader>
          <CardTitle>About Me</CardTitle>
          <CardDescription>Card Description</CardDescription>
        </CardHeader>
        <CardContent>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </CardContent>
        <CardFooter>
          <p>Card Footer</p>
        </CardFooter>
      </Card>

      <Image
        src="https://fastly.picsum.photos/id/841/200/200.jpg?hmac=jAPzaXgN_B37gVuIQvmtuRCmYEC0lJP86OZexH1yam4"
        width={400}
        height={400}
        alt="Picture of the author"
        className="rounded-full basis-1/3"
      />
    </div>
  );
}
