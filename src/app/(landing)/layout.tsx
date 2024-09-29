import LandingPageNavbar from "./_components/navbar"

type Props = {}

function LandingPageLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className="flex flex-col container relative">
            <LandingPageNavbar></LandingPageNavbar>
            {children}
        </div>
    )
}

export default LandingPageLayout
