export default function Navbar() {
    return (
        <body>

            <main>
                <div className="h-10">
                    <h1 className="bg-black p-10 text-white font-bold m-2 text-4xl text-center">
                        UMAIMA'S PORTFOLIO
                    </h1>
                </div>
            </main>
            <div>
            <div className=" mt-10 bg-white p-6 m-2  text-3xl" > <h3 className="text-black font-bold">
    About Me
</h3>
</div>
<div>
    <h4 className="text-2xl ml-10 font-bold"><u>
        Umaima Zakir
    </u>
    </h4>
    <p className="ml-10 mt-3">
        My name is Umaima Zakir<br/>
        I study in class 12.
    </p>
    <div>
      <h1>My Image</h1>
      <img src="\Umaima\girl.jpg" alt="Umaima Zakir" width="600" height="400"/>
    </div>
</div>
            </div>
        </body>
    )
}
