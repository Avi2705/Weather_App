
import rainIcon from '../assets/rain.png';
import cloudIcon from '../assets/cloud.png';
import snowIcon from '../assets/snow.png';
import windIcon from '../assets/wind.png';
import broomIcon from '../assets/broom.png';
const Weatherdetails = ({ icon, temp, city, country, lat, lon,wind,humidity }) => {

    return (
        <>
            <div className="mb-4">
                <img className="w-[160px] h-[160px] mx-auto " src={icon} alt='Clear' />
            </div>
            <div className="mt-1 text-2xl font-bold text-gray-700 text-center">
                {temp}°C
            </div>
            <div className="mt-1 text-xl font-bold text-orange-600 uppercase text-center">
                {city}
            </div>
            <div className="mt-1 text-sm font-bold text-gray-700 text-center">
                {country}
            </div>

            <div className="flex justify-center gap-3 text-md  font-semibold ">
                <span>Lattitude </span>                    <span>{lat}</span>
            </div>


            <div className="flex justify-center gap-3 text-md  font-semibold ">

                <span>Longitude </span>
                <span>{lon}</span>
            </div>
            <div className='flex justify-between mt-8  '>
                <div className='text-center w-12 '>

                    <img className='h-[60px] w-[60px]' src={rainIcon} alt="Icon" />
                    <div className='text-md  font-bold pt-3'>
                        <div>
                            {humidity}
                        </div>
                        <div>
                            humidity
                        </div>
                    </div>
                </div>
                <div className='text-center w-12 '>

                    <img className='h-[60px] w-[60px]' src={rainIcon} alt="Icon" />
                    <div className='text-md  font-bold pt-3'>
                        <div>
                            {wind}
                        </div>
                        <div>
                            humidity
                        </div>
                    </div>
                </div>
            </div>
            <p className='text-center text-md '>
                Designed by <span className='font-extrabold'>Avinash</span>
            </p>
        </>
    )
}
export default Weatherdetails;
