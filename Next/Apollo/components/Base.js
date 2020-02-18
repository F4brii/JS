export default ({ children }) => (
    <div className='main'>        
        {children}  
        <style jsx>
            {`
                .main{
                    margin: 0;
                    padding: 0;
                    display: flex;
                    min-height: 100vh;
                    flex-wrap: wrap;
                }
            `}
        </style>      
    </div>
);