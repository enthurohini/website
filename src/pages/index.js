import BrowserOnly from '@docusaurus/BrowserOnly'
import Head from '@docusaurus/Head'
import Link from '@docusaurus/Link'
import Translate from '@docusaurus/Translate'
import useBaseUrl from '@docusaurus/useBaseUrl'
import useDocusaurusContext from '@docusaurus/useDocusaurusContext'
import Layout from '@theme/Layout'
import clsx from 'clsx'
import React, { useEffect } from 'react'

import Mesh from '../components/Mesh'
import PickVersion from '../components/PickVersion'
import whoIsUsing from '../data/whoIsUsing'
import styles from './index.module.css'

const description =
  'Chaos Mesh brings various types of fault simulation to Kubernetes and has an enormous capability to orchestrate fault scenarios. It helps you conveniently simulate various abnormalities that might occur in reality during the development, testing, and production environments and find potential problems in the system.'

function Feature({ imgUrl, title, description, reverse }) {
  return (
    <div className={clsx('row', 'tw-mb-6 last:tw-mb-0 md:tw-mb-16', reverse && 'tw-flex-row-reverse')}>
      <div className="col col--6 tw-text-center">
        <img className="tw-h-48 tw-mb-6 lg:tw-h-64 lg:tw-mb-0" src={useBaseUrl(imgUrl)} alt={title} />
      </div>
      <div className="col col--6 tw-flex tw-items-center">
        <div>
          <h3>{title}</h3>
          <div>{description}</div>
        </div>
      </div>
    </div>
  )
}

function Home() {
  const { siteConfig } = useDocusaurusContext()

  useEffect(() => {
    document.querySelector('.navbar__inner').classList.add('tw-container', 'tw-mx-auto')
  }, [])

  return (
    <Layout description={description}>
      <Head>
        <title>Chaos Mesh: {siteConfig.tagline}</title>
      </Head>
      <main>
        <div className="hero tw-relative tw-h-[768px] tw-pt-0 tw-overflow-hidden">
          <BrowserOnly>{() => <Mesh />}</BrowserOnly>
          <div className="tw-container tw-mx-auto tw-z-10">
            <div className="tw-flex tw-flex-col lg:tw-flex-row md:tw-justify-around lg:tw-items-center">
              <div className="tw-flex-[.8] 2xl:tw-flex-[.6] tw-p-6 lg:tw-p-3">
                <h1
                  className={clsx(
                    'tw-inline-block tw-text-5xl xl:tw-text-6xl tw-text-left tw-rounded-2xl tw-backdrop-blur-sm lg:tw-backdrop-blur',
                    styles.heroTitle
                  )}
                >
                  <span>Break</span>
                  <br />
                  Your System
                  <br />
                  <span>Constructively.</span>
                </h1>
                <p className="lg:tw-text-lg tw-font-medium tw-rounded-2xl tw-backdrop-blur-sm lg:tw-backdrop-blur">
                  {/* TODO: add translation. */}
                  <Translate id="home.description">{description}</Translate>
                </p>
                <Link to="/docs/production-installation-using-helm" className="tw-btn tw-btn-sm tw-btn-primary">
                  Get Started →
                </Link>
              </div>

              <div className="lg:max-xl:tw-w-[500px] tw-p-6 lg:tw-p-3">
                <h2 className="tw-inline-block tw-text-base lg:tw-text-lg tw-font-semibold tw-rounded-2xl tw-backdrop-blur-sm lg:tw-backdrop-blur">
                  Try it out with the following command 👇
                </h2>
                <PickVersion>curl -sSL https://mirrors.chaos-mesh.org/latest/install.sh | bash</PickVersion>
              </div>
            </div>
          </div>
        </div>

        <div className="hero max-lg:tw-pt-0">
          <div className="tw-container tw-mx-auto tw-px-4 tw-text-center">
            <h2 className="tw-text-lg">
              <Translate id="home.whoisusing">Who is Using Chaos Mesh</Translate>
            </h2>
            <div className={clsx('max-md:tw-overflow-x-auto', styles.whiteboard)}>
              <div className="row max-md:tw-w-[1280px]">
                {whoIsUsing.map((w) => (
                  <div key={w.name} className={clsx('col col--1', styles.whiteboardCol)}>
                    <a className="tw-flex tw-justify-center tw-items-center tw-h-[100px]" href={w.href} target="_blank">
                      <img style={w.style} src={useBaseUrl(w.img)} alt={w.name} />
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="hero">
          <div className="tw-container tw-mx-auto tw-px-4">
            <Feature
              imgUrl="img/features/undraw_server_down_s4lk.svg"
              title={<Translate id="home.easytouse">Easy to Use</Translate>}
              description={
                <>
                  <p>
                    <Translate
                      id="home.easytouse.1"
                      values={{
                        minikube: <Link to="https://minikube.sigs.k8s.io/">minikube</Link>,
                        kind: <Link to="https://kind.sigs.k8s.io/">kind</Link>,
                      }}
                    >
                      {
                        'No special dependencies, Chaos Mesh can be easily deployed on Kubernetes clusters directly, including {minikube} and {kind}.'
                      }
                    </Translate>
                  </p>
                  <ul>
                    <li>
                      <Translate id="home.easytouse.2">
                        Ability to perform chaos experiments in production environments without modifying the deployment
                        logic of the application.
                      </Translate>
                    </li>
                    <li>
                      <Translate id="home.easytouse.3">
                        Easily orchestrate the behavior of chaos experiments, allowing users to observe the state of the
                        experiment itself in real time and quickly rollback any injected failures.
                      </Translate>
                    </li>
                    <li>
                      <Translate id="home.easytouse.4">
                        Packed with dashboard. No handwritten experiment definitions are required, and a chaos
                        experiment can be run smoothly in just a few clicks.
                      </Translate>
                    </li>
                  </ul>
                </>
              }
            />
            <Feature
              imgUrl="img/logos/kubernetes.svg"
              title={<Translate id="home.k8s">Design for Kubernetes</Translate>}
              description={
                <>
                  <p>
                    <Translate
                      id="home.k8s.1"
                      values={{
                        crd: (
                          <Link to="https://kubernetes.io/docs/concepts/extend-kubernetes/api-extension/custom-resources/">
                            CustomResourceDefinition (CRD)
                          </Link>
                        ),
                      }}
                    >
                      {'Chaos Mesh uses {crd} to define chaos experiments.'}
                    </Translate>
                  </p>
                  <p>
                    <Translate id="home.k8s.2">
                      In the Kubernetes realm, CRD is a proven solution for implementing custom resources. CRD enables
                      the natural integration of Chaos Mesh with the Kubernetes ecosystem.
                    </Translate>
                  </p>
                </>
              }
              reverse={true}
            />
            <Feature
              imgUrl="img/features/undraw_stars_re_6je7.svg"
              title={<Translate id="home.failuretypes">A wide variety of failure types</Translate>}
              description={
                <p>
                  <Translate id="home.failuretypes.1">
                    Chaos Mesh initially started from a distributed system perspective, fully considering the possible
                    failures of distributed systems, thus providing a more comprehensive and fine-grained fault type to
                    help users with fault injection for network, disk, file system, operating system, etc. in a
                    comprehensive manner.
                  </Translate>
                </p>
              }
            />
            <Feature
              imgUrl="img/features/undraw_safe_re_kiil.svg"
              title={<Translate id="home.safe">Safe and Controllable</Translate>}
              description={
                <>
                  <p>
                    <Translate id="home.safe.1">
                      Chaos Mesh provides role-based access control. Users can create roles with corresponding
                      permissions according to their needs, such as visitor roles, administrative roles, etc.
                    </Translate>
                  </p>
                  <p>
                    <Translate id="home.safe.2">
                      In addition, Chaos Mesh supports setting up Namespace whitelists and blacklists, which allow users
                      to protect important Namespaces and thus gain greater control over the "blast radius" of
                      experiments.
                    </Translate>
                  </p>
                </>
              }
              reverse={true}
            />
          </div>
        </div>

        <div className="hero">
          <div className="tw-container tw-mx-auto tw-px-4 tw-text-center">
            <h2 className="hero__subtitle">
              Chaos Mesh is a <Link to="https://cncf.io/">Cloud Native Computing Foundation</Link> incubating project
            </h2>
            <div className="cncf-logo tw-h-16 md:tw-h-24" />
          </div>
        </div>
      </main>
    </Layout>
  )
}

export default Home
