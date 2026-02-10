import React from 'react';

const MovingMountainsLibrary = () => {
    return (
        <div className="p-12 max-w-7xl mx-auto">
            <h1 className="text-6xl font-condensed font-bold text-aia-red uppercase mb-8">Our Moving Mountains Library</h1>
            <p className="text-xl text-aia-charcoal mb-12">
                A number of Moving Mountains assets have been produced for your use. You can find our library on our asset links page.
            </p>

            {/* Grid Placeholder */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
                    <div key={item} className="aspect-square bg-aia-grey rounded-lg flex items-center justify-center text-aia-charcoal/50">
                        Mountain Asset {item}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default MovingMountainsLibrary;
