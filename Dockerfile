FROM quorum/frontdev
MAINTAINER Douézan-Grard Guillaume - Quorums

ADD . /srv/http/corporate

WORKDIR /srv/http/corporate

VOLUME ["/srv/http/corporate"]

CMD ["/bin/true"]
