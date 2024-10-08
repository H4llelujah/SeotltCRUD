import { memo } from 'react'
import { classNames } from '@/shared/lib/classNames/classNames'
import cls from './NewsDetails.module.scss'
import { Text } from '@/shared/ui/Text/Text'
import { AppImage } from '@/shared/ui/AppImage/AppImage'
import { Loader } from '@/shared/ui/Loader/Loader'
import { renderNewsBlock } from './renderBlock'
import { getNewsById } from '@/pages/NewsPage'
import { useSelector } from 'react-redux'
import { StateSchema } from '@/app/providers/StoreProvider'
import { Card } from '@/shared/ui/Card/Card'
import { VStack } from '@/shared/ui/Stack/VStack/VStack'
import { ImageErrorFallback } from '@/shared/ui/ImageErrorFallback/ImageErrorFallback'

interface NewsDetailsProps {
    className?: string
    id: string
}

export const NewsDetails = memo((props: NewsDetailsProps) => {
    const { className, id } = props

    const news = useSelector((state: StateSchema) => getNewsById(state, id))

    if (!news) {
        return null
    }

    return (
        <Card
            max
            padding="16"
            className={classNames(cls.NewsDetails, {}, [className])}
        >
            <VStack gap="16">
                <Text size="l" bold title={news.title} />
                <Text bold size="m" text={news.subtitle} />
                <AppImage
                    className={cls.img}
                    src={news.img}
                    fallback={<Loader />}
                    errorFallback={<ImageErrorFallback />}
                />
                {news.blocks.map((block) => renderNewsBlock(block))}
            </VStack>
        </Card>
    )
})
