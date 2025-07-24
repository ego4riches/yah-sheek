import {LayoutWrapper, MainWrapper} from "@/app/layout/styled.ts";
import {Outlet} from 'react-router-dom';
import {Footer, Header} from "@/widgets";

export const Layout = () => {
    return (
            <LayoutWrapper>
                <Header/>
                <MainWrapper>
                    <Outlet/>
                </MainWrapper>
                <Footer/>
            </LayoutWrapper>
    )
};