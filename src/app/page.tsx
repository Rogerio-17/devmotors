import { Container } from '@/components/container'
import { Hero } from '@/components/hero'
import { Services } from '@/components/home/services'
import { Submenu } from '@/components/home/submenu'
import { getDataHome } from '@/utils/actions/get-data'
import { HomeProps } from '@/utils/home.type'
import { Phone } from 'lucide-react'

export default async function Home() {
    const { object }: HomeProps = await getDataHome()

    console.log()

    return (
        <section>
            <Submenu />
            <Hero
                heading={object.metadata.heading}
                bannerUrl={object.metadata.banner.url}
                buttonTitle={object.metadata.cta_button.title}
                buttonUrl={object.metadata.cta_button.url}
                icon={<Phone size={20} color="#fff" />}
            />

            <Container>
                <Services object={object} />
            </Container>
        </section>
    )
}
