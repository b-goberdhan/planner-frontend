# Choose ubuntu version
FROM mcr.microsoft.com/mssql/server:2019-CU13-ubuntu-20.04

# Create app directory
WORKDIR /usr/src/app

# Copy initialization scripts
COPY . /usr/src/app
             
# Set environment variables, not to have to write them with docker run command
# Note: make sure that your password matches what is in the run-initialization script 
ENV SA_PASSWORD password3441!
ENV ACCEPT_EULA Y
ENV MSSQL_PID Express

# Expose port 1433 in case accessing from other container
# Expose port externally from docker-compose.yml
EXPOSE 1433
USER root
RUN ["chmod", "+x", "/usr/src/app/entrypoint.sh"]
RUN ["chmod", "+x", "/usr/src/app/run-initialization.sh"]
USER 1001

# Run Microsoft SQl Server and initialization script (at the same time)
CMD /bin/bash ./entrypoint.sh