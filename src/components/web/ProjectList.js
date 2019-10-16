import React from 'react';
const ProjectsList = {
  'ericauv-store': {
    tags: ['node.js', 'react.js', 'graphql', 'apollo', 'next.js', 'deployment'],
    title: 'ericauv-store',
    summary: (
      <>
        <p>
          A web store that allows users to purchase photo prints. Sends order
          confirmation emails through integration with Mailgun. Processes credit
          card payments via Stripe API integration.
        </p>
        <ul>
          <li>Learnt how to make Queries + Mutations using graphql'</li>
          <li>'Learnt how to set up a graphql datamodel'</li>
          <li>
            'Saw the beauty of how graphQL is self-documenting through its
            datamodel and schema
          </li>
        </ul>
      </>
    ),
    githubLink: 'https://github.com/ericauv/ericauv-new',
    projectLink: 'https://store.ericauv.com',
    challenges: ['deployment', 'cookies'],
    lessons: [
      'Learnt how to make Queries + Mutations using graphql',
      'Learnt how to set up a graphql datamodel',
      'Saw the beauty of how graphQL is self-documenting through its datamodel and schema'
    ],
    nextSteps: [
      'determine how to implement lcoal storage to store JWT token while app is SSR',
      'accesibility: dark-mode, fidelity slider',
      'skeleton site for items pages',
      'Allow cart access without requiring sign up',
      'password reset flow',
      'Improve Cart UX: update quantity of cart item, esc key to close cart, click outside cart to close cart',
      'add site map to footer'
    ],
    images: {
      title:
        'https://c1.sfdcstatic.com/content/dam/blogs/ca/Blog%20Posts/start-ecomerce-store-og.png',
      summary:
        'https://www.logolynx.com/images/logolynx/e3/e3368a59705284ba6862f1ae3f580fb7.png',
      lessons:
        'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBw0PDw8PDQ8ODw0NDQ0PDQ8PDw8NDQ0PFREWFhURFRUYHSggGBolGxUVIj0hJSk3Oi4uFx8zRDMsNygtLisBCgoKDg0OFxAQFjEfHR0tKy0tLSsrLSstLS0tKystLS4rLS0tLS0tKystLS0rLS0tLS0tLSstLS0tLS0tLSstLf/AABEIAK4BIgMBIgACEQEDEQH/xAAcAAACAgMBAQAAAAAAAAAAAAACAwABBAUGBwj/xABEEAACAgIABAMEBgYIBAcBAAABAgADBBEFEiExBhNBIlFhcQcUMkKBkSNSYnKSsTNzlKGywdHSJFSDohUWJVOT4fEX/8QAGQEBAQEBAQEAAAAAAAAAAAAAAAECBAMF/8QAIxEBAQACAgEEAgMAAAAAAAAAAAECEQMxIQQSQWETUTJxgf/aAAwDAQACEQMRAD8A7eXKhASIsCMUSlEMCUQCGokURiiFRRDAkURqiRFKsMCWBDAlVQWEBLAhAQKCywIYWEFgABL5YYEvUAOWXyw9SagByycsPUmoC+WUVjdStQFalERxEErASVgkRxEEiAkrAIjiIJEBDLFlZkEQGEIxyIthHsIDCFIIgsI1hAIgJIgxrCLIkQMkkkCxDUSlEYogWBDAlARiiVVqIwCUBGKIRaiMUSgIwCFQCGBIBDAgQCEFlhYYECgJepYELUDRca4rZTlcOxqvL/4zItF3N1Zaa6Xc8o33LBRv/wDRi+NuOUYi46232Ui3JQWmnm84UclmyNKTrmCjt69x3mfxjgH1m/HyFycjHsxRaENIoOxYNN/SIwB103rsTFcf4DffiCijIIsW+q4WZS+er8h3yMF5eny/zganLuvp4fdk8IGffe1tXMM4ZttyVhgLGrovI2QpJ0B1+MLhvEufEy34Zl2cS4gtDNyZTit0uC+whxtIKt7PQAbI7zozTnNTYDbj15HTyXrqd6l0d+2rNsg9tDWt95rOB+HMiqzJy8vL87iGXUtXmV1IlGLWhYotSEE6BbftE7189hrfCnGaH5rMjOyLc9KGbKxLx9UOKqgs/JihRzAHpze0da6wE8Q57Yy8RY49OHZl4leLjhTdbfj2ZC0l3s7ByG5gFGug2SD02XDfDWS2WM3imTXlW1VW0Y1NNIpxaq7OXnYqSWZ25fU66/LT8LwlRV5KeflWYmKwfGw7GqbGpYDSdQgdwuzoOxAOj6DQc54j8b3U42ciVgZqZ2ViYwrZd149daO2Y5bYUKr72RoMVB98nEuLZKXVV8QybsHhj4WMyZeOnN59/IPNS3IKt5XwOhvfebJvA+04uxtU5XFvMRLQpQY1J+zWNeu9sSB1MzeMcH4lbVXRjZ1eNS1FdOSfIFlw0NM1LE6HMOntDprY0YRuMFkapDW3PWVHlv5nneYg6K/P15tjR38Y7Ux+EcNqxMenGp35WPUlSc2ixCjWyR6nvMvUKWRAKxupWoCSIBEcVgEQEkQGEcwgEQEMIthHkRbCEIYRbCPIi2EKSRAYRpEBhAVJCkkRaiMEBRGCVVqI1RBURgEAlEaBBURiiASiGolARgECwIaiUojBAghASAQgIFAQgJAIUCtS5epyPjTxqmCfIx1F2awHs9SlPN9nnA6lj00o/u6bSbR1ljqoLMQqjuzEKo+ZM0uR4u4VX0bNoJHfkY3f4AZxeL4M4rxIi/iuQ9SE8y1sOe0D4VjS1fz94mwX6NMdN757l162MrD93kH2vmNfKa1E3XQ0+NOEOdDMqH74sqH5uoE3ePfXYoep0sQ9nRldD8iOk8/yPAWGByeWa3PYvc3nt+4qM4b+Gam7wvn8PY3cMvtZgRzVLXcLWH7QKBLB8CPwjUN16zqScj4L8bV5x8jIC1ZoB0BsV3678m+oYeqn+/rrsJmxQalEQ9SoUsiURDIlGAsiAwjSIJgJIi2EcwgEQEsIsiOIi2EBDCAwjmEURIhLCAY1hFmVS5IUkIiw1giGsKYojFEBY1BCDWMUQFjRCiUQ1EECMWAYEICY75VY9dn4dZkrMzKXxKtxs7ixCAlCEJpFy9SCXA1HirjIwcS3I6FwAlKns1rdFHyHc/BTOV+jTw6WB4nl7syL2dqC/UgEnmuP7THevcPnMf6VrWvyMDAQ68xgx/escVIfw0/5z0fHoStErrHKlaKiAdlVRoD8hNdRnujlySTLQLa1YFWAKnuD1B+Y9ZqMnBZOiksn3QKajr58tJ1N1E5tCuhBVW11AZUYbHwbp8Pxgea+N/DdgX6/jVvVdjkWWsnsEquiLQAi6Zdb37vlOy8GceGfiJadC5D5eQo6AWAD2gPcQQfx16RXLSPu4rb6aCYtg/Eex/Ocf9H1n1Pi2Vg7/R3K4rGwdlP0lfYkf0bP6ma7jPVeoyjClTLQYJEMwTAAwTDMEwAIi2EaYDCAi0gAsSAACWJOgAO5J9BOKzPpHwVd1pqyshK/6S2lF8sD3jZHTp3OpheM+MPn3Nw7Cf8AQVe1m2q2vMIOhQp0d+1oa9WI9FM6Xw5lYSVpjYyeRyD2K21+k6E84cbFhIHN32QQ2tESs72bwTjmLnV+Zi2c4Xo6kctlZ9zKe3z7GZjCcp4j8J2Jb9e4Qwx8xNl6hpackd2BHYE+49D8D1mZ4W8TLnB6rENGbj9MihtgjR0WXfXW+mj1H5Exdt2wimjjFNCgkkkganjniTBwPL+uWmrzufy9V2283Jy832FOvtL3981y/SPwT/mz/Zsr/ZOT+m77XD/3c3+dE8yED34fSPwT/mz/AGfK/wBkav0j8D/5s/2fK/2T5/EIQafTPAPEOFnixsO3zRUVFh8u2vlLAkfbUb7HtNpdcqDZ7+g9TPI/oZtKrlEE683HJG9A+y3eekPYWJJ7/wAvhOb1HP8Ajmp3XtxcXvvnpl/XnPbQ/DZgmxm+0Sf5flELGrPn5cmeXddcwxnUNpqLHQ/H4D3zcqNAD3DU1deUyjShQPkf9Y0Zz/s/kf8AWdPBycfHPuvHlwzzrZCFNb9ef9n8j/rLXNsJ17PX4H/WdE9VhXj+DJs5YmLTkEkBgOvYjffXqJlT3l287NPNfEA5/EuGG7KuNr8Odx/fPS55n4wPk8f4fcfs2DFG/wDqvW39zCemzV+GIkkkkjSSSSE66+75n+UDTPk9SGvqIBI19eCH+5Br85wWe6r4iw3QqfMNGytxyBtles+2fh6TvPrOQfW8fAJboficWcG7vkeJKFYsxoKBie4CUtb19hddTrt3mozXqsoy5Uy0qCYRlGAJgGGYJgAZwvibj9+XceGcJO7TtcvJBITHTsyhh2PoW/AdezPE/Hr8q88M4Ud3HYy8kHSY6b0yhh2PoSO3Yde214Pwmnh1S4uGofIcBrHYa36ebZrso6gKO/YfeYGe2Bj+GsSiheH0or2MPMvvZR5lYIKm3foSOZVX3b7gNvX8cwvq5AvdrKX5jXbsC2tgQzMw6BTzabzeg52UsVVFU9U5GOoRAbsi9mYAkB7n0Oaxzr2UA5euug5QATyg63PyBQp2xuyLT5bEJ1ubZHkVL1AAPp1A6ltn7Q01fD+P22bx7deYOqP1H1iv9RugKuN+4cw0dKeZRz+wePYf1ckv5LfWdf8At+U/KH10Ps8v/Zrpyk4HFrTj3LRSosymKNj0UbcU2NvSAH7gHX9oEDohs8zsfBvhg4Ye/JbzM/J63Pvm8sE78tT69epPqQPQCUdCYphHNFNI0XJJJA8r+m77XD/3c3+dE8yE9N+m77XD/wB3N/nRPMhCjEIQRCED076H/sZf9bR/haekLPN/of8AsZf9bR/haekLPnet/lP6dXpuqasaIpY0TkdAxDWAIxBs6H8wJYlZNeGWGwykH5/6Ri4Dg72vT5/6TIxKiq6Pckn5TIE+jh6fDUtmq48ubLdkvginGIYMxHTsB7/fuZUEQp0yaeVu3nv0w4TGnFyk2Gx7mrJH3Q4DK34NWP4p3PCs1cjHpvXtfTXZr3cygkfgdj8JjeI+GDMxMjHOt21EVk9lsHtIf4gJyn0R8VL49uHZsWYjlkU9D5Tkkj5h+b+ITfwz8u7vtCI7nqERmIHcgDc1nD+P49uPjXuwo+t1G2tLGGwo1vr26cy/xCX4npDYl7l7UNNF9qmuxq9kVN0YDo669GBHr3AnN8G8JJlYOC12Tkj/AIGleQDH1WjGu3lT2OntVp1OyQNSDoeI8erptwUHI9WebtXeYorrRKfM8zetMCNeo77mdxB/0TaHNzgL0UvsHv0CP01v7pnG53AaMXJ4HV1uC3ZFbvcTabNY55dhtgAEDQHQaGu06Xil9RcKxVinpvDYAnvsWMGB7doGo4jf5FT2vTirVUpZi+HeWOvTm8pV2e34zQ/RRgvdfl8StUDnZ66wo5U53bns5R6AeyB8yPSa3xjlnNyquG4KjmNgFp5MdQbevTmq+4o2T1PUe9Z6jwbhleJj1Y1X2KUC77F27s5+JJJ/GXqJ8sySSSZaCZRlmUYAzh/E3iK7Ju/8N4QebIfYychT7GMnZgGHYj1b07D2j0HjnFMviWTZw3hjeVTT7Ofljfs9dFFI+II6dWIPYAk7bg/CKcNDicPGnHL9byWCs6nXr6GzR6J2UHZHUBqzvYeB8Iq4fV9VwwHyGCtkXMOgOuj2a9P1awevw6tNi5TGT71ltraHY35NxH4DsPgFUegEY7V4yLXWpZ3LeXWDzW3P95mY/mXPv+U1efleRt3YPlOvL7PUIpP9DSD8R39SNnQUBYoMzJ8gMzHmybCquygsN91x6x0Oup6/Enod65DjvFWpK10qLeJZXsU0pqxMdGHTQ7E9Op1pteigiO43xl6CgC+dxK/aUUKOZaQ3Tt33sdd/a+AHMd14Q8L/AFTmyco+bxC/ZtsJ5vK33RT7/efw7CVO1eEPCq4StbcRbn37a+4kuVLHZRSevfu33j+AHQNGtFNIpTRTRrRTQpckkkDyv6bvtcP/AHc3+dE8yE9U+mTCvtbANNN1vKMzm8qt7eXZp1vlB12P5TzgcGzf+UzP7Nf/ALYGMiMQSASFG2IBIUfH3QkRiCQCQv2iASF+Z9Jv+FLmU1WVnAzGLElSMa7RJXWm9nt0hcKrzKabKzgZrFiSpGLdo7UDTez8J53LPzrF14cXBfbvk1uXfjq/E/11n0P/AGMv+to/wtPSFnDfQ1wy9FyjdXbTq3HKi6qyouArb1zAbno2Vi/eQfMD+YnP6viuWsp8Men5JPFY6xqxKxiz57sNENRvt1ixM7hpOyOvLr8Nz048fflMWM8vbNs+gEKoPcAbjRAEKfXk1NPnW7ohLgwhKLnlvGP/AEnjteSPZxc0lrPRQthC3D8H5bPxE9Snm/0uXC18LCrrD5FlnOh3pgHPlrWP3m/wCax7Sut8cXcnDM5vfiWr/GOX/ObLhNPl4+PX/wC3j0p/CgH+U8w4j4f8TvQ2NY/1jHdVVkF2OdqpBA5m03cD1mb/AOKeLV6HFU/9Khv8L6jSbdH43s8u3hVv6vE1X0+/U494/nMPxVxv6pjPbyqLX9in9AVDWnej1dgQOp18JyvF/wDzFkmv6zRUhptrvrLHEpIdNhSed+o6noek03iTF4gopu4garay5ULSaFHoWQtSvKCQvx7SyFrufoq8Pmups+8E35QPklurLSTsuSfVz137gPeZ38TiOjV1tWAK2rQ1gDQCFQVAHy1GzNu1iSpcoyKqc94544cHDd0P/EWnycYDq3mMD7QH7I2fmAPWdBODv/8AUeOqh9rF4RXzkd1bIJB/Pm5f/iPvhK2nhXwpRjYlSX1I+Uf0l1hH6VLG7qtg9peUaGwe436zMRmwlFXIbaSwXHYaVxY7dK7j26sf6T1319rRba5F6INude4dyfkB1M1WXnLarVa0jhlZid6B7Hp93t1Hoeh3qDonLy0xgzufMybOUWMoJbudVVL35Qd6A+J6nmI5TxBxY4wVmHm5+R7OJSv6TytkDfs9yeg2PtdFHQDywz+LJi1GzIJszA1lNNPYgg6BC+gI5ST3P2f3dr4O8M2I54hxD28+7qqntiqRrWvR9dPgOnvlZ7M8H+Fzjbyss+bxG/rY503kgj7C+m9dCR8h0HXpWhmLMjUgGi2jGimhS2imjDFNACXKkgUDDUxSwxAepjUMQpjFMIeDGCKUximFHyKe6g/MCGtSfqr+QgKYxTM+2fpd39jFSfqr+QjEAHYAD4dICmEJZJOom6YIQgCEDKCEKBC3AKeY/Suuszh74/P9cK6Tl13W0GnW/vc7NPTZwf0s4ANFGYrlLsW1UTXdg5BHX0Kldg/OXHtL013/APROJYvscQwPaHQsfMxC3x6qyn8Oky6/pZxSPaxbwf2XqYfn0mvwPpLzaUQZ+L5iuqlLRzYzWqR0bRBV9+8aEzz9JXCm6vhXk/1WK4/MvNa+md/bF4h9JeNYQyY+RtV0FNorBOz3IYj/ALZyvHuL35r0rdWMbHaxeUipdjZCs/MFUvoN2m94t44xrXX6ngrzgaVbKKCSd/s7Pu6DUwOA1PxPidNeb+iFYLihVdV0mn8oBySvN3JPoPlqzwPZ6KVrRK1+zWiov7qjQ/lGSiZW55trlSSiYGDxziS4mNdkv1FNZYD9d+yr+LED8Z8/43FL6rxlJYRkCw2l9652ZuZg3vBO9j4z6D4nw+jKqajIQWUvy8yksuyCCDsEEdQJiYPh/Ax9eRi46MOzeWrWfxnZ/vllYyxtcL/5qe5n+pYObkq59gsG5R19WAbYA13MyFxfEeT2rx8FCQSzlXtPTvoc35aGvynoZMEwuvtyPh3wSmNccrLuOZlk7V2XlSs/rAEks3xPb3es6ljCYxZMiyaCxizDYxbGFA0U5jGMUxhANFNDYxbQoZJJIAKYYilMYDAapjQYhTGqYDlMapiFMaphDgYamJUxgMKcphgxIMNTAaDCBiwYQMBgMvcAGWDAOafxdwY52HZjqwWwlXqLfZ51OwD8D1G/jNsDL3CPJuG+M8/h9ZxMrFS+rEbyDzbTyyOyFwGQ9O3Tt75lP9IHCn62cKrZviuM438ys6/inB8lMhs3htlaX2qq5WPcD9WywvRSSOquB03/APe8DK4nmFGR+DXJa3QvUcfIT5hgVI/ymtxPLlLPGXnMy8P4aOYgDlULaqjX6ldYPx3zTa/Rnwa661uK5L8xsFiU7JZmO+RnJPYAAqB8/cI6rw/xPN2mSDhYZ+2hua/KsX1UDmKID8e3xnd4mNXTWlVShKqkVEUdlUDpFpIfK3KlbmWlypNwSYFkwTITBJgQmCTLJi2MCMYsmWTAJgUTFsYTGLYwBYxRMJjFsZEAxizCYwDKqbkg7lQgAYxTFCGpkDRGKYoGEDKp4MYpiFMYDCMgGGDEK0YDCnAwwYkGGDAcDDBiQYQMBwMG25UVndlREBZmYhVVQOpJPYSg05b6TGB4c9bEBL7qKnJLABC+2J16aU/huB1OVlV1VvbY3LVVW9ljdSFRQST0+AmFgcbqvsNddWYNAnntw8nHqOvc1igGajxNnLlYGauLZyIMa7znuxcpUak1tsVseQE9O4J/zmR4VyMpsVMjNy67xbQLSEqrrWoaLHTL9oAa9PQwNpTxjHfKtw1cnJorrttTlOlR/snm7bPXp8IOPx/BssFSZNJuax6xUXC2mxRtkCnrsDrr3dZxfB7LUy+G8SasCvi75Vd5JPODeFfFHLrsFp1sn73Yd5rvB+E9y4T5l/JhZmRdlY9dYGszN535RfZ71RFZFA+6epKgwj1DLzKqq7LbGC10qzWN1blCjZ6Drv4TDz+O49PJzC92srWxEoxsjKsKH1K1qdfjPKuMLdk43Gqq9rgYOfmZeQyvzHKvYoyY3boFO3YDsSigdJ1OWc5eI4VVOZj0JkYPKqijndaKtNr9I5DMSdbGug+BhXU2eIKFWoumUrXq7V1fVb2vKrrmJrVSw7jp36zMwM+nIrFtDrZWSRsb2rDurA9VYeqkbE5HxhmLTmcEbIuqWuvIyrLrrClNe1o5ebZ+z9rtvXX5R/hOstn8VyqBrAy3xTS+mVci9KuW22seqHoObXtEE7MDrtyiZW5W4FkwSZRaAWgWWgEyEwCYEYwCZZMWTAhMWxls0UTCKJi2MJjFEwqGLYwiYtjAqXBkkQMIGDJAapjAYgGMUyhoMYpiRCBhTwYxWiFMMGRGQDDBiFMMGVTgYYaJBhAwHAwg0SDCBgMcKwKuAysCGVgGVge4IPeYGFwHh9HP5GHiU+anJZ5WPVX5ifqtyjqOvYzM3L3AMVppQFXlTXINDSaGhoempj5XDse2ryLKkNPMjBFHIFZXDqw5daIYA7EduTmgKfh2Ma7KjRSaryTdX5aeXaToEuutN2Hf3CKzuDYWQEGRi414qHLWLqa7RWutaXmB0NTL5pXNABcKgLWopqCU/wBCorQLV017A17P4R+4vcrcAy0otA3KJgETBLQSYJMCyYJMomATAsmAzSmaLJhFkxbGWxiyYVRMEmQmAxgUxgEyyYEiJJJJA//Z',
      constraints:
        'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBw8PDxAPDRAPDQ0OEA8PDw4NDQ8NDg8OFREWGBUVFRYYHSggGBonGxUWITEhJykrLi4uFx8zODMtNygtLisBCgoKDg0OGhAQGyslHSYwKy0tKywtLS0vMDctNS0tLS4yKystKysuLS0tLS0tLS0tLS0tLS0tLS0rLS0tLTc3Lf/AABEIAMIBAwMBIgACEQEDEQH/xAAcAAACAgMBAQAAAAAAAAAAAAAAAQIDBAUGBwj/xABDEAABBAECAwQHBQYEBAcAAAABAAIDEQQFEgYhMRNBUXEHFCJhgZGhIzNCUrEkMmJyc7IWwcLhFTSCkiVDRFODotH/xAAaAQEAAgMBAAAAAAAAAAAAAAAAAQUDBAYC/8QAKREBAAICAQIFBAIDAAAAAAAAAAECAwQRBRIhMUFxgRMiUWEUMyM0Qv/aAAwDAQACEQMRAD8A9xQhCAQhCAQhCAQhCAQhCAQhCAQhCAQhCAQhCAQhCAQhCAQhCAQhCAQhCAQhCAQhCAQhCBWmvPdN4g9Xfp7/AGo8fOecSfGe4uGNmNO0Ftn2RuG0t94XdZmZHDG6WZ7YomC3Pe4NaB5oMhC53F4zwpXtZG6RxfezbBI/dXgGgn6LbYGpwZAJglZJRIcGu9prh1Dmnm0+4hBmIQEIBCEIBCEIBCEIBCEIIkrFk1GJvV11+UE/osTVMkl4iaaFW+uXXoFT2YrkBXyVPt9SnHeaY45mPNsY8MTHNm1x8yOT9xwJHUdD8leCuJz3ljt8Z2ubzBC6jRc4ZEDZOhNtcPB45FZen9Q/k81mOJh6z6304i0eUs9CEKzaoQhCAQhCAQhCAQhCAQhCAQhCAQhCDwGEY2TLBEzNdixwTR5IbqbnRSSyteHO+0PRxI7wVsvSVNqGVEGF+PJhtf2jWxZsUj3ENO3dQBcBZNUuq4d4CaY//ERvG0NZE47nN/ic7xWj4t4IxsWfFbCI4YMp0kLppWbhFPtuMGq5Oo8/cpHmej5seOYy7Jmw8lxc3cz7oAkDm+zt9/Ijn15L1LT2z4jm4+q1sywThalG5u+PI221pe3rfIjxXMwcI4zMTKkyDFLm4z5Kxuxa6xY2ljyfbaevIe7uWFndvnmMHUw9kYbtw5m9h2Tmiht8vJB7JwFxCc7Gd2tHJxnmGeqpzgLa8DusUVu9R1OHGZ2mRI2Jl7QXHm53g0dXH3BeFaG3VsA5Do8P1jt9v2pL3NG26LSzv59/gFpuKNS1DIIdlsyB2ILYonCXs2E1ucHHrfLl3Ug+go+JcQmnSGK+hmjkiYfJzht+q2cM7Hi2Oa8eLXBw+i+YsDiPIglhhinnZ2u1luIki7Rxqtru6+XVelYOoy4zxBq8Pqb5fZg1LGBg2y/h3gcuZ95HcoHq4Ka5Lgnir1tssOS5jcvFdtkIIa2Zn4ZWjuvw8QuqZIHc2kOHuIKCaFTLlRsNPexhPc57Wn6q1rrFg2D3jogaEki7xUcjldZlMeU6+jmtI8qr/JVP1HlyW11/CjyWDbI2OZl7HE2PI+5cXlYecw7ewc/wdGQ9p+K5Te1L/WtbH4xP4XOtfHakRbwmF2o5ookldJwC13qe93ISSyPb/LyF/QrmdO4Vy8p4OSDjQA27dzkcPAAdPNei4sDYmNjjG1jGhrQO4Bb/AErStinvsxb2xS1Yx1XJpJq9VYQhJA0ISQNCEkDQkmgEJJoBCSEDQkhA1g6xpcOXC+DIaHxPHMHqCOhB7iCs1CDynP8ARvlwm8LIMzAbEU/tj6/52tA7h3OfKW5WM190GxtgJ5+O/uXuqEHl+PwDqMDAcLPyMQuFuhZOXNafD2wQVzPEmlakJhiZORk5mTJE+WOMujLZGN5OrkLI5cl7stBxZw8M1jHRvdBl47i/GyGGnscRzF+BQec8AejvGnZFm5jg90DiXQlzyY5GHo8E0Dyta70ocf8ArDfVRGG4cpIbI4e24A8pA78PiAP9ln5sGpYU3a5uO7JY4PbI/GkGLJKXCtzntcA74lajTc7Ijj7JkceTjs5erahB7TB4B9EHzCkaDgzN1E5TfUmNmy+zfCd7GyxuZydZB5X7P1K6jU9U1fG2nLw248hJa3Ixy/E3PIO3cYyLA5n4LK0fW8HFmbM/Gm0mVu77SCMZONzFG2tBrr7lsuK+K9Lz4GQy6g93ZyCUeqYkrZHODSK9oUBTig4rS+K8uKV0faxZT3/eDLh7UPP87iSV0Wj8VxCLbkYeRC8OLvXNOnogk9zWmwB020QuSmhjMrIsCKUGV1MMwcZ5D5VyHwXqXBnB0Om4T3Z8bMnJneZCJGNdsJHJreu1Y75K0iZt5Q9xWZ4iPVmw8X7YPWoZ2alisIbMzY2DMg95A5OrvFDr17lmQ68MholB+ycLYB0r/wDV5rxnpL4j63gMc2W9skUe6nwn8J8a7lP0eyS5TjixW0Elx38jEPxcj+iqNzJO1hicFvXxhu4sUYr8ZY+XpceSyQdyw8jEo20uH8riP0WM6A48r4Sd3ZkAE8raQCD9UZWe2Nu6R4YCaF9ST0AHUn3LnLfUreaf9R+G/FIj7qz4S2WFl5MfR5kb4Se19eq3eDqgkOx42Sdwuw7yK5J2S9lOlZLGwiw58UgaR51Q+KhPqrC9oY9pkaWkNDhv6+HWlY623tYbRFueP3DBl18eTy4+HoSFFh5C+pCkurieVOEBCFIaSaSBoQkgE0kygSYSTCASQhAIQhAItRtFoJWhRtFoJJJWi0CewOFOAcD1BFhYGRoWJIdz4Iif5K/RbC07QYGTouLK3Y+GMtAoUwNIHmFqpOCMAg1GWkggEPPI+K6RCDxFmIzTJ3s1BmRFkxyF+LqeKO1+zPQPZ3946UV10WvvzWNEcuJlMbZ3xPdDOOX4oXfDofgu3zcGKdu2aNsjf4hdeXguR1b0a4Up3Ql8EncQbA8iKcPmsebHGWk0t5S947zS0WhjRFrjR8qKy8bT4oJW5MYayYjZuaALaetrVYPA2djvPZzNkaTzdNK9/LyPNdD/AIfyCQDJHtHf7V35Lmb9M2MF+cXj7LX+Tiyx908I5WF2jjIXEvcBZ8lxHGGjSySsJZI9jAdpjeRtce/l3rotV1cYMwgyHgOc0PaRe0tJrqrW6pHKLa5rveDa0+7Lgy98x937ZIp317eeauHjy9Tx2bYsqfs+6LJAlZy/Df7wHzWWzjB0lf8AFdMjnc0+zkYErRKwDpQNO+S3+W9lG6pYnDEEUWTI/Ni24csP2cksRdEXbvGuXmrvQ6jfPbtvX5a2zqUx17qz8IH0gxMp2n5Mkxb95g6iwteB/C/qPPn0XU6Px5BlxuMTRFLGB2zMqVsLIifB3MvHvA+S5HjvhzTZYZcjHLeyx2Ne98cm4Bzz7IjcOYdVnrS8qz4iIwWSieM0GOHszC+5w7/NXfKsfRkPEE0h/Z36dkeMbMt7H/AltE/JTl4qdE0PycLLjYXFpkiEOSwEd4DH7nDyb3LzbQ/RRDlYkOXhajktdKwPAexgaHd45CxRVcug69pZMkeVI6OFrjueWzY+3vO00R5Wg9iwNYxsj7iaOQ/lDgHjzaeYKzl4vpPFrdRZ2WdJpUE3MNnMUzJL8RteNp99rtOHJNTxoy174dYgBuOWCYMyGs/Kdxp/zCDtUlo28VYzTWQJsN3eMmFzG3/OLafmtvi5Ucrd8L2SsP4o3B4+YQWppApoEmEkwgSE0kAhCEFG5Pcqdye5BbuRaq3J7kFu5Fqu07QWWi1C0WgstFqFp2gnaFC07QStCVoBQeW+lTCMmZCQL+wr/wCxXGnT5GG27mnxaSCvWeLYA6aMnujr6rSOxWnuXK7+1NNi1eF9qY4nFWXAuyZwC17nPaeRtxBr3HqFteHs/VLczT55pRG3ccfIYMlgbdcrp31W+ydKY4dFn+j/AAuyzJa74v8AUFn6ft914pEebHt4Psm3Pk0sLJdSgz8GYR4uoTOZPGwNMMcha3aW0efd9V5/g8Mvw5GeuslgkY40yVpbC48wCHHkfmvd+MuFG57WvY7ssqL7qUOLD16bhzHmuNlydfwBtl25kA5FuXH2jXD+qy/qF0UKZ3/B2KYsKFpqyC7lX4ja1vpSkczSp3NJADoi8t67N43fRcZh8X4LCTkYeXpUhPOXAdvgLvEtYa+YWyzuNtMfA+GfVo54ZGlpacS8gg9xqhfwUoeZ6DkTapmtw4mtfE/m4uhY9jWAi3OHcKvvWXgYQOoHD090zJu0eyKTDmfC1wYLLiwnaB/t4rYycQQNhfiaFiPihl9mfLyG7HSN77J7vcFm+ip3qUk+VLiTzxO+zZlY8Yk7MX7VsvdRodPkgznavxBgezO5uVEOVZ0FX/8AKzktJrXFsZc17sV+k5QP/M4jy2J7veW8vgV7FBxbp0lD1mNpJ27JrgdZ7i14BC8+9JuTA0zOhgj7PGDGTPaGhs00jQ4M8KDSDfifcpF3DHpSLQ2LUh2pNMhyYQ0do4mgJBYDSfzch5Lt4uIpnjdHhSyN/gmhLq8rXzQ98DmPfjO7NpB7TGkvYfHYe4+4rpuDOGNUzInZOnz9m6F+wsfK6OTpYPxCge4DjDFaayRPhu8MrHkY2/c4AtPzWz0vWcbKBOLPFOG/vCN4c5vmOoXj79f4m06m5Ebcho6dsAQfduHUrW6XxNibzJqmFlY+S97net4jyws3G6BaeQ9ykfQCa8v0HXs6WW8HKidhg/u6u9rZ3ju27BYH81ldO7W9RiNyYUeVH+bAyQ91fyvAv5qB1KFy540iHJ2JqLHd7ThOcR8Wkj5FCDb2i1FJBZae5V2i0Fu5PcqrTtBbadqrcmCgttO1VadoLbRartO0Flp2q7TBQc7xI65Wj8rP1WlbKLrvW5zxvkkd76HkBX+S5yXHL5o2tsEu5kflHM/QFcRtT9bZtx6y6HW4riiJ9Gwc3ksrhIftUn9L/UqY22wH3LJ4WH7TJ/T/ANS99Ljjaq87M84bOuTULTtdooGt1Dh/En+9hZf5mew75iloX+jjCLrDpAPCo3H5kLsLTtBzn+CMHsnR7HW4V2heS8H3d3wpcdkcA6hhWdMyZGMu9sD6B843cvkV6paaDw/P13UWVj5+LFmQCTfKPuMiQ8+TgRX17llaAMbMhytOlBwW5TzPh9rRDT07N3Pu6denRev5GHFJ95GyT+dgd+q5riHgTEyoyImCCS7BbuDCfIHl5jmnMjx+f0fZOIQMrGc+OPk2fFBkjkbd26uf0XqnoudEIJaewOc8Ds9wDxQ729Vy79J17TT+y5Mzom/+XM0ZkND31uCodxeHmtV0tsrh1yMAlso99CnA+SD2WaFr2lr2h7T1DgCF496Y/VoJsSIRxxRU98lNIDz0aDXkfotlpfFGI7lgavJjEdcTUmiZo93te2PgVp+Npm5xa7JycO427N2PvO4Xd0Ty7/mnA4qA4s7iI44jRAvs3AAm657r7vBZWmzPimbHh5GTjSvdtjEEpyYZXeAa7n3dOSwax8cGPELXSP5FzgXyO9wo8l2foX4b9Yyf+ISn7PEc9scfP79w5uPkCpD/AMXa+32RkYxA5XNC9kn/AFNrkUL2h+FE4kujY5x6ksaSfohQMRClSSCKE0kBadpIQStO1C0WgstO1ValaCdp2q7RaC20nyUCfAEqFrH1GSone/l81izX7Mdrfp7pXutENS93sX42fmsTQ4d+RI/uiid/3O5foCrcqSm0sjhtlQSyf+453yApcl0+n1M/M+nMrnLPZhn9+DGiH2Y8ldwx/wAxL/TH9yqZ+4PJWcN/fy/0x/co6b/t1+TP/TZ1Np2qtydrs1GstStV2mCgnadqu07QTTUbRaCdrAz9Gxsj76Fjz+atrvmOazQnaDhtY9GeJP8Au0PBszBKB8eoWhb6HIr/APT141L+m5er2mg8T4r4HyMKI+ptjDSB9syKm13tdXNl+K0WiZeLjbBPHnabMD7WXjSSGJ3hZYarzX0QQDyPMHuK0uo8KYU9kxCNx/FF7H06FBwcPFDi0FnEGOWfhMrMbtK/i9nqktvN6K8ZziRI2ifxY7HH4m0KR2aSkkoEUlJJBEpKRSQJJMpIC07UUWglaLULRaCe5YOsO+yPm39VlFywNYd9kfNv6rV3f6L+zNr/ANtfdo8qTkVuOHXfsbff2n9xWhy/3T5Lc8Nv/ZY/+v8AuK5/o1eb29ltv+GOvuoD/Yr3KfDsg7eUd5YCP+7/AHWJLyc5vg4hV6ZLsymeDw5v0sfotbR/x7cRP54e81O7Bbj8OzDkw5Y4ephy7NQLw5SBVAcpgoLgUwVUCpAoLLTtVgqQKCdpgqAKYKCaahadoJJqIKaBoSQgxSo0p0lSCBSUikUESoqSRQRKRTKiUCKRKCokoAlIuUHFVucgtc9a/VX/AGZ8x+qsklWo1WdxadvVYdjHOTFasesMmK0VvFpYuZ+6Vn6DNWPEPc7+4rlcjOyn+wIQD0L9/s+dLdac5zWNDu4Kq6VpZcFrTkhv72zjyVitZZuZ94T+YArAndsex/5XtPwtZM8oJb48wsbOFtPkqrdpOLcmY/PLe1bd+CI+HWskVrXLVYExMbL67G350LWexy66s81iXP2jiZhlNcrAVjtKsaV6QuBUwVUCpAoLQVK1UCpWgsBTtVgqQKCYKdqNoBQTBTtQtO0E7QooQVUlSkUkESFFTKRCCBUSpkKJCCBUCrCFEhBWVAqwhQIQVOVTgr3BQc1BhyNWJLDa2TmKt0aDTvxR4Kt0RW3dEoGBBzebiSO/cJaR0I7lTFp+XIQJJG7Afwspx8+a6kY4VscPuWK+DHeYtaOZhkplvSOKzxCOFCWtAPNZ7GqEYV7VlYzaFYFEKQQTCkFAKSCQKkFEJhBMFMFQBTtBMFSBULTtBNO1C07QTQo2kgkoqSSCKRCkhBAhRIUykQgrIUSFYQkQgqIUSFaQokIKSFAtV5CiWoKC1QLFkFqRagxixIsWQWpbUFGxSDFbtTpBW0KxqdJgIAKYUQE0EwmoBSQSUgVC07QTtO1C07QTBTtQTCCdp2oWnaCdpJWhBckUIQJBSQgSSEIEVEoQgSiUIQRKRQhBFIoQgSSEIEmkhA0BCEDTCEIBNCEDTCEIGmhCBphCEDCaEIGhCEH/2Q==',
      challenges:
        'http://agrytech.org/wp-content/uploads/2017/02/challenges-ahead-900-x-500-900x407.png',
      nextSteps:
        'https://media.istockphoto.com/vectors/flat-design-vector-concept-of-stairs-with-light-bulb-magnifier-gear-vector-id901963952?k=6&m=901963952&s=612x612&w=0&h=gqRyWDesc0eoHMDfWJWDZJPT2FqsIYpvmBG1wh3OrWk='
    }
  },
  'student-profiles': {
    tags: ['react.js'],
    title: 'student-profiles',
    summary:
      'The goal of this project was to successfully implement a design handed off to me by another designer. The aim was to reproduce the visual and functional features of the mockup as accurately as possible',
    constraints: ['complete task within 24 hours of mockup receipt'],
    lessons: ['Learnt to use React.Context']
  },
  'dimension-image': {
    tags: ['react.js'],
    title: 'dimension-image',
    summary:
      'Allow user to add and position dimension annotations on an image.',
    background:
      'saw an image with a dimension div that appeared on hover on Pinterest. I wanted to implement more in depth functionality and allow anyone to add dimensions to their images easily.',
    lessons: [
      'normalization of dimension line properties',
      'saving image with dimension info'
    ]
  },
  ericauv: {
    title: 'ericauv',
    tags: ['react.js', 'gatsby.js', 'deployment']
  },
  'bullet-app': {
    title: 'bullet-app',
    tags: ['react.js', 'firebase']
  },

  'yt-2-spotify': {
    title: 'yt-2-spotify',
    tags: ['node.js', 'graphql', 'RESTful', 'apollo'],
    summary:
      'A weekend hackathon at home done in collaboration with a friend. Convert a youtube playlist to a spotify playlist. User enters the url of a youtube playlist, and a spotify playlist containing the same songs is created.',
    constraints: ['Brainstorm project ideas, design and build in one weekend.'],
    challenges: [
      'A lot of cleanup was required on the youtube titles. I used Regex to remove a lot of noise from youtube video titles so that the title could be used in spotify as a search term'
    ],
    lessons: [
      'Became familiar with React hooks (useState, useRef, useEffect)',
      'Used Apollo DataSource methodology to organize our spotify and youtube api calls + data cleanup/reduction',
      'Learnt the benefit of drawing out a swimlane analysis diagram to visualize dataflow between frontend <-> graphQL server <-> external APIs'
    ]
  },
  'rest-api': {
    title: 'rest-api',
    tags: ['node.js', 'RESTful'],
    summary: 'to fill',
    constraints: ['to fill'],
    challenges: ['to fill'],
    lessons: ['to fill']
  }
};

export default ProjectsList;
