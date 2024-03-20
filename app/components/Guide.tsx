import Image from "next/image";

function Guide() {
  return (
    <section className="flexCenter flex-col">
      {/* FIRST DIV */}
      <div className="w-full padding-container max-container pb-24">
        <Image src={"/camp.svg"} alt="Camp" width={50} height={50} />
        <p className="uppercase regular-18 -mt-1 text-green-50">
          we are here for you
        </p>
        <div className="flex flex-wrap justify-between gap-5 lg:gap-10">
          <h2 className=" bold-40 lg:bold-64 xl:max-w-[390px]">
            Guide You to Easy Path
          </h2>
          <p className=" regular-16 text-gray-30 xl:max-w-[520px]">
            Only with the hilink application you will no longer get lost and get
            lost again, because we already support offline maps when there is no
            internet connection in the field. Invite your friends, relatives and
            friends to have fun in the wilderness through the valley and reach
            the top of the mountain
          </p>
        </div>
      </div>

      {/* SECOND DIV */}
      <div className="flexCenter max-container relative w-full">
        <Image
          src={"/boat.png"}
          alt="boat"
          width={1440}
          height={500}
          className="w-full object-cover object-center xl:rounded-5xl"
        />
        <div className="flex absolute bg-white py-8 pl-5 pr-7 gap-3 rounded-3xl shadow-md md:left-[5%] lg:top-20">
          <Image
            src={"/meter.svg"}
            alt="meter"
            width={30}
            height={100}
            className="h-full w-auto"
          />

          <div className="flexBetween flex-col gap-8">
            <div className="flex flex-col gap-2 w-full">
              <div className="flexBetween gap-4">
                <p className="text-gray-30">Destination</p>
                <p className=" bold-16 text-green-50">48 min</p>
              </div>
              <h2 className="bold-20">Aguas Calientes</h2>
            </div>

            <div className="flex flex-col gap-2 w-full">
              <div className="flexBetween gap-4">
                <p className="text-gray-30">Start track</p>
              </div>
              <h2 className="bold-20">Wonorejo Pasuruan</h2>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Guide;
