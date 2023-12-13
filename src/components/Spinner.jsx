/**
 * This component is a spinner for loading data
 * 
 * @returns {JSX.Element} a spinner
 */

const Spinner = () => {

    return (

        <div class="flex items-center justify-center h-fit my-6">
            <div class="relative">
                <div class="h-24 w-24 rounded-full border-t-8 border-b-8 border-gray-200"></div>
                <div class="absolute top-0 left-0 h-24 w-24 rounded-full border-t-8 border-b-8 border-black animate-spin">
                </div>
            </div>
        </div>

    );
    
};
  
export default Spinner;